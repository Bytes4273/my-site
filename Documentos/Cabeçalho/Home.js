<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mega Block-chain - Painel Financeiro</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Firebase SDK -->
    <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-database.js"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&family=Roboto:wght@300;400;500&display=swap');
        
        :root {
            --neon-blue: #00f3ff;
            --neon-purple: #bc13fe;
            --neon-pink: #ff00ff;
            --dark-bg: #0f172a;
        }
        
        body {
            font-family: 'Roboto', sans-serif;
            background-color: var(--dark-bg);
            color: #e2e8f0;
            overflow-x: hidden;
        }
        
        .futuristic-font {
            font-family: 'Orbitron', sans-serif;
        }
        
        .neon-text-blue {
            color: var(--neon-blue);
            text-shadow: 0 0 5px var(--neon-blue), 0 0 10px var(--neon-blue);
        }
        
        .neon-text-purple {
            color: var(--neon-purple);
            text-shadow: 0 0 5px var(--neon-purple), 0 0 10px var(--neon-purple);
        }
        
        .neon-text-pink {
            color: var(--neon-pink);
            text-shadow: 0 0 5px var(--neon-pink), 0 0 10px var(--neon-pink);
        }
        
        .neon-border-blue {
            border: 1px solid var(--neon-blue);
            box-shadow: 0 0 5px var(--neon-blue), inset 0 0 5px var(--neon-blue);
        }
        
        .neon-border-purple {
            border: 1px solid var(--neon-purple);
            box-shadow: 0 0 5px var(--neon-purple), inset 0 0 5px var(--neon-purple);
        }
        
        .neon-border-pink {
            border: 1px solid var(--neon-pink);
            box-shadow: 0 0 5px var(--neon-pink), inset 0 0 5px var(--neon-pink);
        }
        
        .neon-glow-blue {
            animation: neon-glow-blue 1.5s ease-in-out infinite alternate;
        }
        
        .neon-glow-purple {
            animation: neon-glow-purple 1.5s ease-in-out infinite alternate;
        }
        
        .neon-glow-pink {
            animation: neon-glow-pink 1.5s ease-in-out infinite alternate;
        }
        
        @keyframes neon-glow-blue {
            from {
                box-shadow: 0 0 5px var(--neon-blue), 0 0 10px var(--neon-blue);
            }
            to {
                box-shadow: 0 0 10px var(--neon-blue), 0 0 20px var(--neon-blue);
            }
        }
        
        @keyframes neon-glow-purple {
            from {
                box-shadow: 0 0 5px var(--neon-purple), 0 0 10px var(--neon-purple);
            }
            to {
                box-shadow: 0 0 10px var(--neon-purple), 0 0 20px var(--neon-purple);
            }
        }
        
        @keyframes neon-glow-pink {
            from {
                box-shadow: 0 0 5px var(--neon-pink), 0 0 10px var(--neon-pink);
            }
            to {
                box-shadow: 0 0 10px var(--neon-pink), 0 0 20px var(--neon-pink);
            }
        }
        
        .pulse {
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
            100% {
                transform: scale(1);
            }
        }
        
        .gradient-bg {
            background: linear-gradient(135deg, rgba(11, 15, 25, 0.9), rgba(30, 41, 59, 0.9));
        }
        
        .hidden-panel {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease-out;
        }
        
        .visible-panel {
            max-height: 1000px;
            transition: max-height 0.3s ease-in;
        }
        
        .admin-input {
            background-color: rgba(30, 41, 59, 0.8);
            border: 1px solid var(--neon-blue);
            color: white;
            padding: 8px 12px;
            border-radius: 6px;
            width: 100%;
            margin-bottom: 8px;
            font-size: 14px;
        }
        
        .admin-input:focus {
            outline: none;
            border-color: var(--neon-pink);
            box-shadow: 0 0 0 2px rgba(188, 19, 254, 0.3);
        }
        
        .admin-btn {
            background: linear-gradient(45deg, var(--neon-blue), var(--neon-purple));
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.3s;
            font-weight: bold;
            font-size: 14px;
        }
        
        .admin-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(188, 19, 254, 0.4);
        }
        
        .logout-btn {
            background: linear-gradient(45deg, #ff0000, #ff6b6b);
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.3s;
            font-weight: bold;
            font-size: 14px;
        }
        
        .logout-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(255, 0, 0, 0.4);
        }
        
        .login-container {
            background: rgba(15, 23, 42, 0.95);
            backdrop-filter: blur(10px);
            border: 1px solid var(--neon-blue);
            width: 90%;
            max-width: 320px;
            padding: 20px;
        }
        
        .logo-btn {
            transition: all 0.3s ease;
            filter: drop-shadow(0 0 5px var(--neon-blue));
            position: absolute;
            top: -20px;
            left: 50%;
            transform: translateX(-50%);
            width: 50px;
            height: 50px;
        }
        
        .logo-btn:hover {
            transform: translateX(-50%) scale(1.1);
            filter: drop-shadow(0 0 10px var(--neon-blue));
        }
        
        .level-indicator {
            height: 4px;
            border-radius: 2px;
            background: linear-gradient(90deg, var(--neon-blue), var(--neon-purple));
        }
        
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        
        /* Mobile specific styles */
        @media (max-width: 640px) {
            .card-grid {
                grid-template-columns: 1fr;
                gap: 12px;
            }
            
            .card {
                padding: 12px;
            }
            
            .card-title {
                font-size: 18px;
            }
            
            .card-value {
                font-size: 20px;
            }
            
            .card-label {
                font-size: 12px;
            }
            
            .transaction-table {
                font-size: 12px;
            }
            
            .transaction-table th, 
            .transaction-table td {
                padding: 6px 4px;
            }
            
            .footer-text {
                font-size: 12px;
            }
            
            .footer-icons {
                font-size: 16px;
            }
        }
    </style>
</head>
<body class="min-h-screen flex flex-col">
    <!-- Firebase Configuration -->
    <script>
        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyCz78cr5dJm3cRMAraySm-QoWe6e4v5bew",
            authDomain: "consulta-bytes.firebaseapp.com",
            databaseURL: "https://consulta-bytes-default-rtdb.firebaseio.com",
            projectId: "consulta-bytes",
            storageBucket: "consulta-bytes.appspot.com",
            messagingSenderId: "131624445334",
            appId: "1:131624445334:web:573226a23352023520a9b7",
            measurementId: "G-1VJ9FYQ9DR"
        };
        
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        const auth = firebase.auth();
        const database = firebase.database();

        // Level values configuration
        const levelValues = {
            consumer: {
                1: 3.00,
                2: 7.00,
                3: 20.00,
                4: 40.00,
                5: 60.00,
                6: 100.00
            },
            investor: {
                1: 5.00,
                2: 10.00,
                3: 30.00,
                4: 50.00,
                5: 70.00,
                6: 200.00
            }
        };
    </script>

    <!-- Login Modal -->
    <div id="login-modal" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 hidden">
        <div class="login-container rounded-lg neon-border-blue">
            <h2 class="futuristic-font text-xl mb-4 text-center neon-text-blue">Acesso Administrativo</h2>
            <div class="mb-3">
                <label class="block text-gray-300 mb-1 text-sm">Email</label>
                <input type="email" id="login-email" class="admin-input" placeholder="admin@mega.com">
            </div>
            <div class="mb-4">
                <label class="block text-gray-300 mb-1 text-sm">Senha</label>
                <input type="password" id="login-password" class="admin-input" placeholder="••••••••">
            </div>
            <button id="login-btn" class="admin-btn w-full mb-3">Entrar</button>
            <p id="login-error" class="text-red-400 text-center text-sm hidden"></p>
        </div>
    </div>

    <!-- Admin Panel (Hidden by default) -->
    <div id="admin-panel" class="hidden-panel gradient-bg neon-border-blue mb-4">
        <div class="container mx-auto px-3 py-4">
            <div class="flex justify-between items-center mb-4">
                <h3 class="futuristic-font text-lg neon-text-blue">Painel de Operação</h3>
                <button id="logout-btn" class="logout-btn flex items-center">
                    <i class="fas fa-sign-out-alt mr-1"></i> Sair
                </button>
            </div>
            
            <div class="grid grid-cols-1 gap-3">
                <!-- Mega Block-chain Admin -->
                <div class="bg-gray-800/50 p-3 rounded-lg neon-border-purple">
                    <h4 class="futuristic-font text-base mb-3 neon-text-purple">Mega Block-chain</h4>
                    <div class="mb-2">
                        <label class="block text-gray-300 mb-1 text-sm">Perfil</label>
                        <select id="mega-profile" class="admin-input text-sm">
                            <option value="consumer">Consumidor</option>
                            <option value="investor">Investidor</option>
                        </select>
                    </div>
                    <div class="mb-2">
                        <label class="block text-gray-300 mb-1 text-sm">Nível</label>
                        <select id="mega-level" class="admin-input text-sm">
                            <option value="1">Nível 1</option>
                            <option value="2">Nível 2</option>
                            <option value="3">Nível 3</option>
                            <option value="4">Nível 4</option>
                            <option value="5">Nível 5</option>
                            <option value="6">Nível 6</option>
                        </select>
                    </div>
                    <div class="mb-2">
                        <label class="block text-gray-300 mb-1 text-sm">Valor</label>
                        <input type="number" id="mega-amount" class="admin-input" placeholder="0.00">
                    </div>
                    <button id="add-mega-btn" class="admin-btn w-full">Adicionar</button>
                </div>
                
                <!-- Blue Fund Admin -->
                <div class="bg-gray-800/50 p-3 rounded-lg neon-border-blue">
                    <h4 class="futuristic-font text-base mb-3 neon-text-blue">Blue Fund</h4>
                    <div class="mb-2">
                        <label class="block text-gray-300 mb-1 text-sm">Origem</label>
                        <select id="blue-fund-source" class="admin-input text-sm">
                            <option value="mega">Mega Block-chain</option>
                            <option value="byte">+Byte$</option>
                        </select>
                    </div>
                    <div class="mb-2">
                        <label class="block text-gray-300 mb-1 text-sm">Valor</label>
                        <input type="number" id="blue-fund-amount" class="admin-input" placeholder="0.00">
                    </div>
                    <button id="add-blue-fund-btn" class="admin-btn w-full">Adicionar</button>
                </div>
                
                <!-- Byte$ Admin -->
                <div class="bg-gray-800/50 p-3 rounded-lg neon-border-pink">
                    <h4 class="futuristic-font text-base mb-3 neon-text-pink">+Byte$</h4>
                    <div class="mb-2">
                        <label class="block text-gray-300 mb-1 text-sm">Bloco</label>
                        <select id="byte-block" class="admin-input text-sm">
                            <option value="1">1,00</option>
                            <option value="2">2,00</option>
                            <option value="5">5,00</option>
                            <option value="10">10,00</option>
                            <option value="20">20,00</option>
                            <option value="50">50,00</option>
                            <option value="100">100,00</option>
                            <option value="200">200,00</option>
                        </select>
                    </div>
                    <div class="mb-2">
                        <label class="block text-gray-300 mb-1 text-sm">Valor</label>
                        <input type="number" id="byte-amount" class="admin-input" placeholder="0.00">
                    </div>
                    <button id="add-byte-btn" class="admin-btn w-full">Adicionar</button>
                </div>
            </div>
        </div>
    </div>

    <div class="container mx-auto px-3 py-4 flex-1">
        <!-- Header with Logo Button -->
        <header class="mb-6 text-center relative">
            <button id="logo-btn" class="logo-btn">
                <img src="https://img1.wsimg.com/isteam/ip/b467ac44-bc09-4776-aba5-c0da6d43f806/9.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:58,h:100,cg:true" 
                     alt="Mega Block-chain Logo" 
                     class="w-full h-full neon-glow-blue pulse">
            </button>
            <h1 class="futuristic-font text-3xl font-bold mb-1 neon-text-blue pt-6">
                MEGA <br> BLOCK-CHAIN
            </h1>
            <p class="text-sm text-gray-400 max-w-xs mx-auto">
                Sistema de gestão financeira descentralizada.
            </p>
        </header>
        
        <!-- Main Dashboard -->
        <div class="grid grid-cols-1 gap-3 mb-4">
            <!-- Mega Block-chain Card -->
            <div class="gradient-bg p-4 rounded-xl neon-border-purple">
                <div class="flex items-center justify-between mb-4">
                    <h2 class="futuristic-font text-xl neon-text-purple">Mega</h2>
                    <div class="bg-purple-600/20 px-2 py-1 rounded-full text-xs neon-text-purple">
                        <i class="fas fa-link mr-1"></i> Contrato
                    </div>
                </div>
                
                <div class="mb-4">
                    <div class="flex justify-between items-center mb-1">
                        <span class="text-gray-400 text-sm">Shark Vision</span>
                        <span class="futuristic-font text-lg neon-text-pink">$ <span id="mega-total">0.00</span></span>
                    </div>
                    <div class="level-indicator w-full mb-2"></div>
                    
                    <div class="flex justify-between items-center mb-1">
                        <span class="text-gray-400 text-sm">Volume</span>
                        <span class="futuristic-font text-lg neon-text-blue">$ <span id="mega-contribution">0.00</span></span>
                    </div>
                    <div class="level-indicator w-3/5 mb-3"></div>
                </div>
                
                <div class="grid grid-cols-2 gap-2">
                    <!-- Consumer Levels -->
                    <div>
                        <h3 class="futuristic-font text-xs neon-text-pink mb-1">Consumidor</h3>
                        <div class="space-y-1">
                            <div class="flex justify-between items-center">
                                <span class="text-gray-400 text-xs">Nível 1</span>
                                <span class="text-xs neon-text-pink">$ <span id="consumer-lvl1">0.00</span></span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-gray-400 text-xs">Nível 2</span>
                                <span class="text-xs neon-text-pink">$ <span id="consumer-lvl2">0.00</span></span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-gray-400 text-xs">Nível 3</span>
                                <span class="text-xs neon-text-pink">$ <span id="consumer-lvl3">0.00</span></span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-gray-400 text-xs">Nível 4</span>
                                <span class="text-xs neon-text-pink">$ <span id="consumer-lvl4">0.00</span></span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-gray-400 text-xs">Nível 5</span>
                                <span class="text-xs neon-text-pink">$ <span id="consumer-lvl5">0.00</span></span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-gray-400 text-xs">Nível 6</span>
                                <span class="text-xs neon-text-pink">$ <span id="consumer-lvl6">0.00</span></span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Investor Levels -->
                    <div>
                        <h3 class="futuristic-font text-xs neon-text-blue mb-1">Investidor</h3>
                        <div class="space-y-1">
                            <div class="flex justify-between items-center">
                                <span class="text-gray-400 text-xs">Nível 1</span>
                                <span class="text-xs neon-text-blue">$ <span id="investor-lvl1">0.00</span></span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-gray-400 text-xs">Nível 2</span>
                                <span class="text-xs neon-text-blue">$ <span id="investor-lvl2">0.00</span></span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-gray-400 text-xs">Nível 3</span>
                                <span class="text-xs neon-text-blue">$ <span id="investor-lvl3">0.00</span></span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-gray-400 text-xs">Nível 4</span>
                                <span class="text-xs neon-text-blue">$ <span id="investor-lvl4">0.00</span></span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-gray-400 text-xs">Nível 5</span>
                                <span class="text-xs neon-text-blue">$ <span id="investor-lvl5">0.00</span></span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-gray-400 text-xs">Nível 6</span>
                                <span class="text-xs neon-text-blue">$ <span id="investor-lvl6">0.00</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Blue Fund Card -->
            <div class="gradient-bg p-4 rounded-xl neon-border-blue">
                <div class="flex items-center justify-between mb-4">
                    <h2 class="futuristic-font text-xl neon-text-blue">Blue Fund</h2>
                    <div class="bg-blue-600/20 px-2 py-1 rounded-full text-xs neon-text-blue">
                        <i class="fas fa-coins mr-1"></i> Fundo
                    </div>
                </div>
                
                <div class="mb-4">
                    <div class="flex justify-between items-center mb-1">
                        <span class="text-gray-400 text-sm">Banheira</span>
                        <span class="futuristic-font text-lg neon-text-blue">$ <span id="blue-fund-total">0.00</span></span>
                    </div>
                    <div class="level-indicator w-full mb-2"></div>
                    
                    <div class="flex justify-between items-center mb-1">
                        <span class="text-gray-400 text-sm">Mega</span>
                        <span class="text-xs neon-text-purple">40%</span>
                    </div>
                    <div class="level-indicator w-2/5 mb-1"></div>
                    
                    <div class="flex justify-between items-center mb-1">
                        <span class="text-gray-400 text-sm">Byte$</span>
                        <span class="text-xs neon-text-pink">3%</span>
                    </div>
                    <div class="level-indicator w-1/12 mb-3"></div>
                </div>
                
                <div class="bg-blue-900/20 p-2 rounded-lg text-xs">
                    <div class="flex justify-between items-center mb-1">
                        <span class="text-gray-400">Contribuição Social</span>
                        <span class="neon-text-purple">40%</span>
                    </div>
                    <div class="flex justify-between items-center mb-1">
                        <span class="text-gray-400">Mega Dividendos</span>
                        <span class="neon-text-purple">45%</span>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="text-gray-400">DAS</span>
                        <span class="neon-text-pink">15%</span>
                    </div>
                </div>
            </div>
            
            <!-- Byte$ Card -->
            <div class="gradient-bg p-4 rounded-xl neon-border-pink">
                <div class="flex items-center justify-between mb-4">
                    <h2 class="futuristic-font text-xl neon-text-pink">+Byte$</h2>
                    <div class="bg-pink-600/20 px-2 py-1 rounded-full text-xs neon-text-pink">
                        <i class="fas fa-microchip mr-1"></i> Token
                    </div>
                </div>
                
                <div class="mb-4">
                    <div class="flex justify-between items-center mb-1">
                        <span class="text-gray-400 text-sm">Saldo Real</span>
                        <span class="futuristic-font text-lg neon-text-pink">R$ <span id="byte-total">0.00</span></span>
                    </div>
                    <div class="level-indicator w-full mb-2"></div>
                                            
                    <div class="flex justify-between items-center mb-1">
                        <span class="text-gray-400 text-sm">Saldo Byte$</span>
                        <span class="futuristic-font text-lg neon-text-blue">BT$ <span id="byte-real">0.00</span></span>
                    </div>
                    <div class="level-indicator w-1/10 mb-3"></div>
                </div>

                <div class="mb-2">
                    <div class="flex justify-between items-center mb-1">
                        <span class="text-gray-400 text-sm">Saldo Blue</span>
                        <span class="text-xs neon-text-blue">$ <span id="byte-blue">0.00</span></span>
                    </div>
                    <div class="level-indicator w-1/12"></div>
                </div>
                
                <div class="grid grid-cols-2 gap-1 text-xs">
                    <div class="bg-pink-900/20 p-1 rounded flex justify-between">
                        <span class="text-gray-400">1,00</span>
                        <span class="neon-text-pink">$ <span id="byte-1">0.00</span></span>
                    </div>
                    <div class="bg-pink-900/20 p-1 rounded flex justify-between">
                        <span class="text-gray-400">2,00</span>
                        <span class="neon-text-pink">$ <span id="byte-2">0.00</span></span>
                    </div>
                    <div class="bg-pink-900/20 p-1 rounded flex justify-between">
                        <span class="text-gray-400">5,00</span>
                        <span class="neon-text-pink">$ <span id="byte-5">0.00</span></span>
                    </div>
                    <div class="bg-pink-900/20 p-1 rounded flex justify-between">
                        <span class="text-gray-400">10,00</span>
                        <span class="neon-text-pink">$ <span id="byte-10">0.00</span></span>
                    </div>
                    <div class="bg-pink-900/20 p-1 rounded flex justify-between">
                        <span class="text-gray-400">20,00</span>
                        <span class="neon-text-pink">$ <span id="byte-20">0.00</span></span>
                    </div>
                    <div class="bg-pink-900/20 p-1 rounded flex justify-between">
                        <span class="text-gray-400">50,00</span>
                        <span class="neon-text-pink">$ <span id="byte-50">0.00</span></span>
                    </div>
                    <div class="bg-pink-900/20 p-1 rounded flex justify-between">
                        <span class="text-gray-400">100,00</span>
                        <span class="neon-text-pink">$ <span id="byte-100">0.00</span></span>
                    </div>
                    <div class="bg-pink-900/20 p-1 rounded flex justify-between">
                        <span class="text-gray-400">200,00</span>
                        <span class="neon-text-pink">$ <span id="byte-200">0.00</span></span>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Transaction History -->
        <div class="gradient-bg p-4 rounded-xl neon-border-blue mb-4">
            <h2 class="futuristic-font text-lg mb-3 neon-text-blue">Histórico</h2>
            <div class="overflow-x-auto scrollbar-hide">
                <table class="w-full text-xs transaction-table">
                    <thead>
                        <tr class="text-gray-400 border-b border-gray-700">
                            <th class="pb-1 text-left">Data/Hora</th>
                            <th class="pb-1 text-left">Bloco</th>
                            <th class="pb-1 text-left">Tipo</th>
                            <th class="pb-1 text-right">Valor</th>
                        </tr>
                    </thead>
                    <tbody id="transaction-history">
                        <!-- Transactions will be added here dynamically -->
                        <tr>
                            <td colspan="4" class="py-3 text-center text-gray-500">Nenhuma transação registrada</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-900/50 py-4 mt-auto">
        <div class="container mx-auto px-4 text-center">
            <p class="text-gray-400 text-xs mb-2 footer-text">© 2023 Mega Block-chain Technologies. Todos os direitos reservados.</p>
            <div class="flex justify-center space-x-3 footer-icons">
                <a href="#" class="text-gray-400 hover:text-cyan-400 transition"><i class="fab fa-twitter"></i></a>
                <a href="#" class="text-gray-400 hover:text-cyan-400 transition"><i class="fab fa-linkedin"></i></a>
                <a href="#" class="text-gray-400 hover:text-cyan-400 transition"><i class="fab fa-github"></i></a>
                <a href="#" class="text-gray-400 hover:text-cyan-400 transition"><i class="fab fa-telegram"></i></a>
            </div>
        </div>
    </footer>

    <script>
        // Format number with commas
        function formatNumber(num) {
            return num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        }
        
        // Parse formatted number back to float
        function parseFormattedNumber(str) {
            return parseFloat(str.replace(/,/g, ''));
        }
        
        // Byte$ blocks
        const byteBlocks = [1, 2, 5, 10, 20, 50, 100, 200];
        
        // Initialize balances (removed initial values)
        let balances;
        let transactions = [];
        
        // Update UI with current balances
        function updateUI() {
            if (!balances) return;
            
            // Calculate real balance (Byte$ / 10)
            balances.byte.real = balances.byte.total / 10;
            
            // Mega Block-chain
            document.getElementById('mega-total').textContent = formatNumber(balances.mega.total);
            document.getElementById('mega-contribution').textContent = formatNumber(balances.mega.contribution);
            
            // Consumer levels
            for (let i = 1; i <= 6; i++) {
                document.getElementById(`consumer-lvl${i}`).textContent = formatNumber(balances.mega.consumer[i]);
                document.getElementById(`investor-lvl${i}`).textContent = formatNumber(balances.mega.investor[i]);
            }
            
            // Blue Fund
            document.getElementById('blue-fund-total').textContent = formatNumber(balances.blueFund.total);
            
            // Byte$
            document.getElementById('byte-total').textContent = formatNumber(balances.byte.total);
            document.getElementById('byte-blue').textContent = formatNumber(balances.byte.blue);
            document.getElementById('byte-real').textContent = formatNumber(balances.byte.real);
            
            // Byte$ blocks
            byteBlocks.forEach(block => {
                document.getElementById(`byte-${block}`).textContent = formatNumber(balances.byte.blocks[block]);
            });
            
            // Update transaction history
            updateTransactionHistory();
        }
        
        // Update transaction history table
        function updateTransactionHistory() {
            const tbody = document.getElementById('transaction-history');
            tbody.innerHTML = '';
            
            if (!transactions || transactions.length === 0) {
                tbody.innerHTML = `
                    <tr>
                        <td colspan="4" class="py-3 text-center text-gray-500">Nenhuma transação registrada</td>
                    </tr>
                `;
                return;
            }
            
            // Show only last 5 transactions
            const recentTransactions = transactions.slice(-5).reverse();
            
            recentTransactions.forEach(tx => {
                const row = document.createElement('tr');
                row.className = 'border-b border-gray-700 hover:bg-gray-800/50';
                
                const dateCell = document.createElement('td');
                dateCell.className = 'py-2 text-gray-400';
                dateCell.textContent = tx.date;
                
                const blockCell = document.createElement('td');
                blockCell.className = 'py-2';
                
                const typeCell = document.createElement('td');
                typeCell.className = 'py-2 text-gray-400';
                
                const amountCell = document.createElement('td');
                amountCell.className = 'py-2 text-right font-medium';
                
                if (tx.type === 'mega') {
                    blockCell.innerHTML = `<span class="neon-text-purple">Mega</span>`;
                    typeCell.textContent = `${tx.profile} N${tx.level}`;
                    amountCell.innerHTML = `<span class="neon-text-purple">+$${formatNumber(tx.amount)}</span>`;
                } else if (tx.type === 'blue-fund') {
                    blockCell.innerHTML = `<span class="neon-text-blue">Blue</span>`;
                    typeCell.textContent = `Origem: ${tx.source === 'Mega Block-chain' ? 'Mega' : 'Byte$'}`;
                    amountCell.innerHTML = `<span class="neon-text-blue">+$${formatNumber(tx.amount)}</span>`;
                } else if (tx.type === 'byte') {
                    blockCell.innerHTML = `<span class="neon-text-pink">Byte$</span>`;
                    typeCell.textContent = `Bloco ${tx.block}`;
                    amountCell.innerHTML = `<span class="neon-text-pink">+$${formatNumber(tx.amount)}</span>`;
                }
                
                row.appendChild(dateCell);
                row.appendChild(blockCell);
                row.appendChild(typeCell);
                row.appendChild(amountCell);
                tbody.appendChild(row);
            });
        }
        
        // Add transaction to history
        function addTransaction(type, data) {
            const now = new Date();
            const tx = {
                id: Date.now(),
                date: now.toLocaleString(),
                type,
                ...data
            };
            
            transactions.push(tx);
            updateTransactionHistory();
            
            // Save to Firebase (only if authenticated)
            if (auth.currentUser) {
                database.ref('transactions').push(tx);
            }
        }
        
        // Add to Mega Block-chain (Updated function)
        function addToMega(profile, level, amount) {
            if (!auth.currentUser) {
                alert("Você precisa estar autenticado para adicionar valores.");
                return;
            }
            
            // Validate level values
            if (!levelValues || !levelValues[profile] || !levelValues[profile][level]) {
                alert("Erro: Valores de nível não configurados corretamente.");
                return;
            }
            
            // Calculate values
            const levelValue = levelValues[profile][level];
            const totalValue = amount * levelValue;
            const contributionValue = totalValue * 0.6;
            const blueFundFromMegaValue = totalValue * 0.4;
            
            // Use Firebase transaction to safely update balances
            database.ref('balances').transaction(currentBalances => {
                // If currentBalances is null, initialize with default values
                if (!currentBalances) {
                    currentBalances = {
                        mega: {
                            total: 0,
                            contribution: 0,
                            consumer: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 },
                            investor: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }
                        },
                        blueFund: {
                            total: 0,
                            fromMega: 0,
                            fromByte: 0
                        },
                        byte: {
                            total: 0,
                            blue: 0,
                            real: 0,
                            blocks: { 1: 0, 2: 0, 5: 0, 10: 0, 20: 0, 50: 0, 100: 0, 200: 0 }
                        },
                        sharkVision: 0,
                        volume: 0
                    };
                }
                
                // Ensure nested objects exist before trying to update them
                if (!currentBalances.mega) currentBalances.mega = { total: 0, contribution: 0, consumer: {}, investor: {} };
                if (!currentBalances.blueFund) currentBalances.blueFund = { total: 0, fromMega: 0, fromByte: 0 };
                if (!currentBalances.byte) currentBalances.byte = { total: 0, blue: 0, real: 0, blocks: {} };
                
                // 1. Update Mega Block-chain Total
                currentBalances.mega.total = (currentBalances.mega.total || 0) + totalValue;
                
                // 2. Update Mega Contribution
                currentBalances.mega.contribution = (currentBalances.mega.contribution || 0) + contributionValue;
                
                // 3. Update specific level value
                if (!currentBalances.mega[profile]) currentBalances.mega[profile] = {};
                currentBalances.mega[profile][level] = (currentBalances.mega[profile][level] || 0) + totalValue;
                
                // 4. Update Blue Fund Total (from Mega)
                currentBalances.blueFund.total = (currentBalances.blueFund.total || 0) + blueFundFromMegaValue;
                currentBalances.blueFund.fromMega = (currentBalances.blueFund.fromMega || 0) + blueFundFromMegaValue;
                
                // 5. Update volume
                currentBalances.volume = (currentBalances.volume || 0) + totalValue;
                
                return currentBalances;
            })
            .then(result => {
                if (result.committed) {
                    // Add to transactions history
                    const newTransactionRef = database.ref('transactions').push();
                    newTransactionRef.set({
                        type: 'mega',
                        profile: profile === 'consumer' ? 'Consumidor' : 'Investidor',
                        level: level,
                        amount: totalValue,
                        timestamp: firebase.database.ServerValue.TIMESTAMP
                    })
                    .then(() => {
                        alert(`Valor R$${amount.toFixed(2)} aplicado ao Mega Block-chain! Saldo atualizado.`);
                    })
                    .catch(error => {
                        console.error("Erro ao registrar transação no histórico:", error);
                        alert("Erro ao registrar transação no histórico: " + error.message);
                    });
                } else {
                    console.log("Transação de saldo cancelada (talvez por concorrência).");
                }
            })
            .catch(error => {
                console.error("Erro ao aplicar valor ao Mega Block-chain:", error);
                alert("Erro ao aplicar valor ao Mega Block-chain: " + error.message);
            });
        }
        
        // Add to Blue Fund
        function addToBlueFund(source, amount) {
            if (!auth.currentUser) {
                alert("Você precisa estar autenticado para adicionar valores");
                return;
            }
            
            // Initialize balances if not exists
            if (!balances) {
                balances = {
                    mega: {
                        total: 0,
                        contribution: 0,
                        consumer: {1:0,2:0,3:0,4:0,5:0,6:0},
                        investor: {1:0,2:0,3:0,4:0,5:0,6:0}
                    },
                    blueFund: {
                        total: 0,
                        fromMega: 0,
                        fromByte: 0
                    },
                    byte: {
                        total: 0,
                        blue: 0,
                        real: 0,
                        blocks: {1:0,2:0,5:0,10:0,20:0,50:0,100:0,200:0}
                    }
                };
            }
            
            // Update balances
            balances.blueFund.total += amount;
            
            if (source === 'mega') {
                balances.blueFund.fromMega += amount;
            } else {
                balances.blueFund.fromByte += amount;
            }
            
            // Update UI
            updateUI();
            
            // Add transaction
            addTransaction('blue-fund', {
                source: source === 'mega' ? 'Mega Block-chain' : '+Byte$',
                amount
            });
            
            // Save to Firebase
            saveData();
        }
        
        // Add to Byte$
        function addToByte(block, amount) {
            if (!auth.currentUser) {
                alert("Você precisa estar autenticado para adicionar valores");
                return;
            }
            
            // Calculate values
            const totalValue = amount * block;
            const blueFundValue = totalValue * 0.03;
            const blueValue = totalValue * 0.03;
            const realValue = totalValue / 10;
            
            // Initialize balances if not exists
            if (!balances) {
                balances = {
                    mega: {
                        total: 0,
                        contribution: 0,
                        consumer: {1:0,2:0,3:0,4:0,5:0,6:0},
                        investor: {1:0,2:0,3:0,4:0,5:0,6:0}
                    },
                    blueFund: {
                        total: 0,
                        fromMega: 0,
                        fromByte: 0
                    },
                    byte: {
                        total: 0,
                        blue: 0,
                        real: 0,
                        blocks: {1:0,2:0,5:0,10:0,20:0,50:0,100:0,200:0}
                    }
                };
            }
            
            // Update balances
            balances.byte.total += totalValue;
            balances.byte.blue += blueValue;
            balances.byte.real += realValue;
            balances.byte.blocks[block] += totalValue;
            
            // Add to Blue Fund from Byte$
            balances.blueFund.total += blueFundValue;
            balances.blueFund.fromByte += blueFundValue;
            
            // Update UI
            updateUI();
            
            // Add transaction
            addTransaction('byte', {
                block,
                amount: totalValue
            });
            
            // Save to Firebase
            saveData();
            
            return {
                total: totalValue,
                blue: blueValue,
                real: realValue,
                blueFund: blueFundValue
            };
        }
        
        // Load data from Firebase with real-time listeners (for all users)
        function loadData() {
            // Public real-time listener for balances
            database.ref('balances').on('value', snapshot => {
                const data = snapshot.val();
                if (data) {
                    balances = data;
                    updateUI();
                }
            });
            
            // Public real-time listener for transactions
            database.ref('transactions').on('value', snapshot => {
                const data = snapshot.val();
                if (data) {
                    transactions = Object.values(data);
                    updateTransactionHistory();
                }
            });
        }
        
        // Save data to Firebase (only for authenticated users)
        function saveData() {
            if (!auth.currentUser) {
                console.warn("Tentativa de salvar dados sem autenticação");
                return;
            }
            
            database.ref('balances').set(balances)
                .then(() => console.log("Dados salvos com sucesso"))
                .catch(error => console.error("Erro ao salvar dados:", error));
        }
        
        // Login function
        function login(email, password) {
            auth.signInWithEmailAndPassword(email, password)
                .then(() => {
                    document.getElementById('login-modal').classList.add('hidden');
                    document.getElementById('admin-panel').classList.add('visible-panel');
                })
                .catch(error => {
                    const errorElement = document.getElementById('login-error');
                    errorElement.textContent = error.message;
                    errorElement.classList.remove('hidden');
                });
        }
        
        // Logout function
        function logout() {
            auth.signOut().then(() => {
                document.getElementById('admin-panel').classList.remove('visible-panel');
            });
        }
        
        // Event Listeners
        document.addEventListener('DOMContentLoaded', () => {
            // Initialize UI and load data
            updateUI();
            loadData();
            
            // Logo button click
            document.getElementById('logo-btn').addEventListener('click', () => {
                if (auth.currentUser) {
                    document.getElementById('admin-panel').classList.toggle('visible-panel');
                } else {
                    document.getElementById('login-modal').classList.remove('hidden');
                }
            });
            
            // Login button
            document.getElementById('login-btn').addEventListener('click', () => {
                const email = document.getElementById('login-email').value;
                const password = document.getElementById('login-password').value;
                login(email, password);
            });
            
            // Logout button
            document.getElementById('logout-btn').addEventListener('click', () => {
                logout();
            });
            
            // Add to Mega Block-chain
            document.getElementById('add-mega-btn').addEventListener('click', () => {
                const profile = document.getElementById('mega-profile').value;
                const level = parseInt(document.getElementById('mega-level').value);
                const amount = parseFloat(document.getElementById('mega-amount').value);
                
                if (isNaN(amount) || amount <= 0) {
                    alert('Por favor, insira um valor válido');
                    return;
                }
                
                addToMega(profile, level, amount);
                
                document.getElementById('mega-amount').value = '';
            });
            
            // Add to Blue Fund
            document.getElementById('add-blue-fund-btn').addEventListener('click', () => {
                const source = document.getElementById('blue-fund-source').value;
                const amount = parseFloat(document.getElementById('blue-fund-amount').value);
                
                if (isNaN(amount) || amount <= 0) {
                    alert('Por favor, insira um valor válido');
                    return;
                }
                
                addToBlueFund(source, amount);
                
                document.getElementById('blue-fund-amount').value = '';
            });
            
            // Add to Byte$
            document.getElementById('add-byte-btn').addEventListener('click', () => {
                const block = parseInt(document.getElementById('byte-block').value);
                const amount = parseFloat(document.getElementById('byte-amount').value);
                
                if (isNaN(amount) || amount <= 0) {
                    alert('Por favor, insira um valor válido');
                    return;
                }
                
                const result = addToByte(block, amount);
                
                document.getElementById('byte-amount').value = '';
            });
            
            // Auth state listener
            auth.onAuthStateChanged(user => {
                if (user) {
                    // User is signed in
                    document.getElementById('admin-panel').classList.add('visible-panel');
                } else {
                    // User is signed out
                    document.getElementById('admin-panel').classList.remove('visible-panel');
                }
                
                // Always load data (for both authenticated and non-authenticated users)
                loadData();
            });
            
            // Close modal when clicking outside
            document.getElementById('login-modal').addEventListener('click', (e) => {
                if (e.target === document.getElementById('login-modal')) {
                    document.getElementById('login-modal').classList.add('hidden');
                }
            });
        });
    </script>
</body>
</html>