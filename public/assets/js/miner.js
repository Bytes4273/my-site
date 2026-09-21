// Função SHA-256
const sha256 = async (msg) => {
  const buffer = new TextEncoder().encode(msg);
  const hash = await crypto.subtle.digest("SHA-256", buffer);
  return Array.from(new Uint8Array(hash))
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
};

// Módulo Minerador
const Miner = (() => {
  let running = false;
  let nonce = 0;

  const start = async () => {
    if (running) return;
    running = true;
    nonce = 0;

    const token = "+Byt3$";
    const target = "0000"; // dificuldade mínima

    console.log("🚀 Mineração iniciada...");

    while (running) {
      const hash = await sha256(token + nonce);
      if (hash.startsWith(target)) {
        console.log(`✔ Hash encontrado: ${hash} | Nonce: ${nonce}`);
        running = false;
      }
      nonce++;
    }
  };

  const stop = () => {
    running = false;
    console.log("⛔ Mineração parada.");
  };

  return { start, stop };
})();
