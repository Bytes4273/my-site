const functions = require("firebase-functions");
const admin = require("firebase-admin");

// Inicializa o Firebase Admin SDK
admin.initializeApp();

// Firestore reference
const db = admin.firestore();

/**
 * Função 1: setAdmin
 * Promove um usuário a admin (precisa ser chamado por outro admin)
 * 
 * Uso (via frontend ou Postman com Auth):
 *   const setAdmin = firebase.functions().httpsCallable("setAdmin");
 *   await setAdmin({ uid: "USER_UID_AQUI" });
 */
exports.setAdmin = functions.https.onCall(async (data, context) => {
  // Verifica se está autenticado
  if (!context.auth) {
    throw new functions.https.HttpsError("unauthenticated", "É necessário estar logado.");
  }

  // Verifica se quem chamou é admin
  const callerUid = context.auth.uid;
  const callerDoc = await db.collection("users").doc(callerUid).get();

  if (!callerDoc.exists || callerDoc.data().role !== "admin") {
    throw new functions.https.HttpsError("permission-denied", "Apenas admins podem atribuir permissões.");
  }

  const targetUid = data.uid;
  if (!targetUid) {
    throw new functions.https.HttpsError("invalid-argument", "UID do usuário é obrigatório.");
  }

  try {
    // Define Custom Claim
    await admin.auth().setCustomUserClaims(targetUid, { admin: true });

    // Atualiza o Firestore também
    await db.collection("users").doc(targetUid).set(
      {
        role: "admin",
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    );

    return { success: true, message: `Usuário ${targetUid} agora é admin.` };
  } catch (error) {
    console.error("Erro em setAdmin:", error);
    throw new functions.https.HttpsError("internal", "Erro ao definir admin.");
  }
});

/**
 * Função 2: confirmTransaction
 * Confirma uma transação pendente → marca como completed
 *
 * Uso (via frontend):
 *   const confirmTx = firebase.functions().httpsCallable("confirmTransaction");
 *   await confirmTx({ txId: "ID_DA_TRANSACAO" });
 */
exports.confirmTransaction = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError("unauthenticated", "É necessário estar logado.");
  }

  const uid = context.auth.uid;
  const { txId, txHash } = data;

  if (!txId) {
    throw new functions.https.HttpsError("invalid-argument", "txId é obrigatório.");
  }

  const txRef = db.collection("transactions").doc(txId);
  const txSnap = await txRef.get();

  if (!txSnap.exists) {
    throw new functions.https.HttpsError("not-found", "Transação não encontrada.");
  }

  const tx = txSnap.data();

  // Só o dono (from) ou admin pode confirmar
  const userDoc = await db.collection("users").doc(uid).get();
  const isAdmin = userDoc.exists && userDoc.data().role === "admin";

  if (tx.from !== uid && !isAdmin) {
    throw new functions.https.HttpsError("permission-denied", "Sem permissão para confirmar essa transação.");
  }

  if (tx.status === "completed") {
    return { success: true, message: "Transação já está concluída." };
  }

  try {
    await txRef.update({
      status: "completed",
      completedAt: admin.firestore.FieldValue.serverTimestamp(),
      txHash: txHash || "",
    });

    return { success: true, message: "Transação confirmada com sucesso." };
  } catch (error) {
    console.error("Erro em confirmTransaction:", error);
    throw new functions.https.HttpsError("internal", "Erro ao confirmar transação.");
  }
});
