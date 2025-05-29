<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Byte$ World - Admin Dashboard</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --primary: #00bfff;
            --secondary: #ff00d4;
            --accent: #00ffe7;
            --dark: #0a0f1f;
            --darker: #081621;
            --darkest: #02111d;
            --success: #00ff9d;
            --warning: #ffcc00;
            --danger: #ff416c;
        }
        
        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--dark);
            color: white;
            min-height: 100vh;
        }
        
        .header-font {
            font-family: 'Orbitron', sans-serif;
        }
        
        .glow-text {
            text-shadow: 0 0 10px var(--primary);
        }
        
        .glow-box {
            box-shadow: 0 0 15px var(--primary), inset 0 0 10px var(--primary);
        }
        
        .glow-box-secondary {
            box-shadow: 0 0 15px var(--secondary), inset 0 0 10px var(--secondary);
        }
        
        .input-glow:focus {
            box-shadow: 0 0 15px var(--secondary);
            border-color: var(--secondary);
        }
        
        .progress-bar {
            background: linear-gradient(90deg, var(--primary), var(--secondary));
            height: 4px;
            width: 0%;
            transition: width 0.3s ease;
        }
        
        .fade-in {
            animation: fadeIn 0.5s ease-in-out;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .pulse {
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(0, 191, 255, 0.7); }
            70% { box-shadow: 0 0 0 10px rgba(0, 191, 255, 0); }
            100% { box-shadow: 0 0 0 0 rgba(0, 191, 255, 0); }
        }
        
        .status-badge {
            padding: 0.25rem 0.5rem;
            border-radius: 9999px;
            font-size: 0.75rem;
            font-weight: 600;
        }
        
        .status-active {
            background-color: rgba(0, 255, 157, 0.1);
            color: var(--success);
            border: 1px solid var(--success);
        }
        
        .status-expired {
            background-color: rgba(255, 65, 108, 0.1);
            color: var(--danger);
            border: 1px solid var(--danger);
        }
        
        .status-canceled {
            background-color: rgba(255, 204, 0, 0.1);
            color: var(--warning);
            border: 1px solid var(--warning);
        }
        
        .plan-card {
            transition: all 0.3s ease;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .plan-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
        
        .user-type-consumer {
            border-left: 4px solid var(--primary);
        }
        
        .user-type-investor {
            border-left: 4px solid var(--secondary);
        }
        
        .user-type-looter {
            border-left: 4px solid var(--accent);
        }
        
        .tab-active {
            border-bottom: 2px solid var(--primary);
            color: var(--primary);
        }
        
        .data-table {
            width: 100%;
            border-collapse: collapse;
        }
        
        .data-table th {
            text-align: left;
            padding: 1rem;
            background-color: var(--darker);
            color: var(--accent);
            font-weight: 500;
            text-transform: uppercase;
            font-size: 0.75rem;
            letter-spacing: 0.05em;
        }
        
        .data-table td {
            padding: 1rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .data-table tr:hover td {
            background-color: rgba(255, 255, 255, 0.02);
        }
        
        .json-viewer {
            background-color: var(--darkest);
            border-radius: 0.5rem;
            padding: 1rem;
            font-family: 'Courier New', monospace;
            font-size: 0.875rem;
            max-height: 200px;
            overflow-y: auto;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
            .data-table th, .data-table td {
                padding: 0.75rem 0.5rem;
                font-size: 0.75rem;
            }
            
            .main-container {
                padding: 1rem;
            }
        }
    </style>
</head>
<body class="bg-gray-900 text-gray-100">
    <div class="min-h-screen flex flex-col">
        <!-- Header -->
        <header class="bg-gradient-to-r from-[var(--darker)] to-[var(--darkest)] p-4 shadow-lg">
            <div class="container mx-auto flex justify-between items-center">
                <div class="flex items-center space-x-3">
                    <i class="fas fa-coins text-2xl text-[var(--primary)] glow-text"></i>
                    <h1 class="text-xl font-bold header-font">
                        <span class="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
                            Byte$ World Admin
                        </span>
                    </h1>
                </div>
                <div class="flex items-center space-x-4">
                    <button class="bg-[var(--darkest)] hover:bg-[var(--darker)] px-4 py-2 rounded-lg flex items-center space-x-2 transition-all">
                        <i class="fas fa-user-circle"></i>
                        <span>Admin</span>
                    </button>
                    <button class="bg-[var(--primary)] hover:bg-[var(--secondary)] text-[var(--darkest)] font-bold px-4 py-2 rounded-lg flex items-center space-x-2 transition-all">
                        <i class="fas fa-sign-out-alt"></i>
                        <span>Sair</span>
                    </button>
                </div>
            </div>
        </header>
        
        <!-- Main Content -->
        <main class="flex-1 container mx-auto p-4">
            <!-- Dashboard Header -->
            <div class="mb-8">
                <h2 class="text-2xl font-bold header-font mb-2">Gestão de Usuários e Planos</h2>
                <p class="text-gray-400">Gerencie usuários, planos e contratos do sistema Byte$ World</p>
            </div>
            
            <!-- Tabs Navigation -->
            <div class="flex border-b border-gray-800 mb-8">
                <button onclick="showTab('users')" class="tab-button px-4 py-2 font-medium hover:text-[var(--primary)] transition-all tab-active" id="users-tab">
                    <i class="fas fa-users mr-2"></i> Usuários
                </button>
                <button onclick="showTab('plans')" class="tab-button px-4 py-2 font-medium hover:text-[var(--primary)] transition-all" id="plans-tab">
                    <i class="fas fa-cubes mr-2"></i> Planos
                </button>
                <button onclick="showTab('contracts')" class="tab-button px-4 py-2 font-medium hover:text-[var(--primary)] transition-all" id="contracts-tab">
                    <i class="fas fa-file-contract mr-2"></i> Contratos
                </button>
                <button onclick="showTab('expiring')" class="tab-button px-4 py-2 font-medium hover:text-[var(--primary)] transition-all" id="expiring-tab">
                    <i class="fas fa-clock mr-2"></i> Vencimentos
                </button>
            </div>
            
            <!-- Tab Content -->
            <div class="tab-content">
                <!-- Users Tab -->
                <div id="users-tab-content" class="tab-pane active">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-xl font-bold header-font">Lista de Usuários</h3>
                        <button onclick="openUserModal()" class="bg-[var(--primary)] hover:bg-[var(--secondary)] text-[var(--darkest)] font-bold px-4 py-2 rounded-lg flex items-center space-x-2 transition-all">
                            <i class="fas fa-plus mr-2"></i> Novo Usuário
                        </button>
                    </div>
                    
                    <div class="bg-[var(--darkest)] rounded-lg overflow-hidden shadow-lg">
                        <table class="data-table w-full">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                    <th>E-mail</th>
                                    <th>Tipo</th>
                                    <th>Código Convite</th>
                                    <th>Data Cadastro</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td class="font-medium">João Silva</td>
                                    <td>joao@email.com</td>
                                    <td><span class="status-badge status-active">Consumidor</span></td>
                                    <td>70BC-4273</td>
                                    <td>2024-01-15 10:30</td>
                                    <td>
                                        <button class="text-[var(--primary)] hover:text-[var(--secondary)] mr-2">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                        <button class="text-[var(--danger)] hover:text-red-300">
                                            <i class="fas fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td class="font-medium">Maria Investidora</td>
                                    <td>maria@email.com</td>
                                    <td><span class="status-badge status-active">Investidor</span></td>
                                    <td>82BC-1298</td>
                                    <td>2024-02-20 14:15</td>
                                    <td>
                                        <button class="text-[var(--primary)] hover:text-[var(--secondary)] mr-2">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                        <button class="text-[var(--danger)] hover:text-red-300">
                                            <i class="fas fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td class="font-medium">Carlos Looter</td>
                                    <td>carlos@email.com</td>
                                    <td><span class="status-badge status-active">Looter</span></td>
                                    <td>45BC-7821</td>
                                    <td>2024-03-05 09:45</td>
                                    <td>
                                        <button class="text-[var(--primary)] hover:text-[var(--secondary)] mr-2">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                        <button class="text-[var(--danger)] hover:text-red-300">
                                            <i class="fas fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <!-- Plans Tab -->
                <div id="plans-tab-content" class="tab-pane hidden">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-xl font-bold header-font">Planos Disponíveis</h3>
                        <button onclick="openPlanModal()" class="bg-[var(--primary)] hover:bg-[var(--secondary)] text-[var(--darkest)] font-bold px-4 py-2 rounded-lg flex items-center space-x-2 transition-all">
                            <i class="fas fa-plus mr-2"></i> Novo Plano
                        </button>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <!-- Plan Card 1 -->
                        <div class="plan-card bg-[var(--darkest)] rounded-lg p-6 shadow-lg">
                            <div class="flex justify-between items-start mb-4">
                                <h4 class="text-lg font-bold text-[var(--primary)]">Ganho - Consumidor</h4>
                                <span class="status-badge status-active">Ativo</span>
                            </div>
                            <div class="mb-4">
                                <p class="text-sm text-gray-400 mb-1">Tipo: Inscrição</p>
                                <p class="text-sm text-gray-400">Usuário: Consumidor</p>
                            </div>
                            <div class="mb-4">
                                <p class="text-sm font-medium">Benefícios:</p>
                                <div class="json-viewer mt-2">
                                    {
                                        "nft": "Shark Vision",
                                        "dividendos": "1.0 BTS base",
                                        "mensal": "R$ 1.50"
                                    }
                                </div>
                            </div>
                            <div class="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <p class="text-xs text-gray-400">Valor Premium</p>
                                    <p class="font-bold">R$ 100.00</p>
                                </div>
                                <div>
                                    <p class="text-xs text-gray-400">Valor Mensal</p>
                                    <p class="font-bold">R$ 25.00</p>
                                </div>
                            </div>
                            <div class="flex justify-between">
                                <button class="text-[var(--primary)] hover:text-[var(--secondary)] text-sm font-medium">
                                    <i class="fas fa-edit mr-1"></i> Editar
                                </button>
                                <button class="text-[var(--danger)] hover:text-red-300 text-sm font-medium">
                                    <i class="fas fa-trash mr-1"></i> Remover
                                </button>
                            </div>
                        </div>
                        
                        <!-- Plan Card 2 -->
                        <div class="plan-card bg-[var(--darkest)] rounded-lg p-6 shadow-lg">
                            <div class="flex justify-between items-start mb-4">
                                <h4 class="text-lg font-bold text-[var(--secondary)]">Premium - Investidor</h4>
                                <span class="status-badge status-active">Ativo</span>
                            </div>
                            <div class="mb-4">
                                <p class="text-sm text-gray-400 mb-1">Tipo: Fragmento</p>
                                <p class="text-sm text-gray-400">Usuário: Investidor</p>
                            </div>
                            <div class="mb-4">
                                <p class="text-sm font-medium">Benefícios:</p>
                                <div class="json-viewer mt-2">
                                    {
                                        "nft": "Mega Byte5",
                                        "dividendos": "5.0 BTS base",
                                        "mensal": "R$ 4.00",
                                        "blockchain": "Mega Block-Chain"
                                    }
                                </div>
                            </div>
                            <div class="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <p class="text-xs text-gray-400">Valor Premium</p>
                                    <p class="font-bold">R$ 200.00</p>
                                </div>
                                <div>
                                    <p class="text-xs text-gray-400">Valor Mensal</p>
                                    <p class="font-bold">R$ 50.00</p>
                                </div>
                            </div>
                            <div class="flex justify-between">
                                <button class="text-[var(--primary)] hover:text-[var(--secondary)] text-sm font-medium">
                                    <i class="fas fa-edit mr-1"></i> Editar
                                </button>
                                <button class="text-[var(--danger)] hover:text-red-300 text-sm font-medium">
                                    <i class="fas fa-trash mr-1"></i> Remover
                                </button>
                            </div>
                        </div>
                        
                        <!-- Plan Card 3 -->
                        <div class="plan-card bg-[var(--darkest)] rounded-lg p-6 shadow-lg">
                            <div class="flex justify-between items-start mb-4">
                                <h4 class="text-lg font-bold text-[var(--accent)]">Fragmento - Looter</h4>
                                <span class="status-badge status-active">Ativo</span>
                            </div>
                            <div class="mb-4">
                                <p class="text-sm text-gray-400 mb-1">Tipo: Fragmento</p>
                                <p class="text-sm text-gray-400">Usuário: Looter</p>
                            </div>
                            <div class="mb-4">
                                <p class="text-sm font-medium">Benefícios:</p>
                                <div class="json-viewer mt-2">
                                    {
                                        "nft": "Shark Vision Pro",
                                        "dividendos": "3.0 BTS base",
                                        "mensal": "R$ 3.50",
                                        "blockchain": "Mega Block-Chain"
                                    }
                                </div>
                            </div>
                            <div class="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <p class="text-xs text-gray-400">Valor Premium</p>
                                    <p class="font-bold">R$ 150.00</p>
                                </div>
                                <div>
                                    <p class="text-xs text-gray-400">Valor Mensal</p>
                                    <p class="font-bold">R$ 35.00</p>
                                </div>
                            </div>
                            <div class="flex justify-between">
                                <button class="text-[var(--primary)] hover:text-[var(--secondary)] text-sm font-medium">
                                    <i class="fas fa-edit mr-1"></i> Editar
                                </button>
                                <button class="text-[var(--danger)] hover:text-red-300 text-sm font-medium">
                                    <i class="fas fa-trash mr-1"></i> Remover
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Contracts Tab -->
                <div id="contracts-tab-content" class="tab-pane hidden">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-xl font-bold header-font">Contratos Ativos</h3>
                        <button onclick="openContractModal()" class="bg-[var(--primary)] hover:bg-[var(--secondary)] text-[var(--darkest)] font-bold px-4 py-2 rounded-lg flex items-center space-x-2 transition-all">
                            <i class="fas fa-plus mr-2"></i> Novo Contrato
                        </button>
                    </div>
                    
                    <div class="bg-[var(--darkest)] rounded-lg overflow-hidden shadow-lg">
                        <table class="data-table w-full">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Usuário</th>
                                    <th>Plano</th>
                                    <th>Início</th>
                                    <th>Vencimento</th>
                                    <th>Status</th>
                                    <th>Duração</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1001</td>
                                    <td class="font-medium">João Silva</td>
                                    <td>Ganho - Consumidor</td>
                                    <td>2024-03-01</td>
                                    <td>2025-03-01</td>
                                    <td><span class="status-badge status-active">Ativo</span></td>
                                    <td>365 dias</td>
                                    <td>
                                        <button class="text-[var(--primary)] hover:text-[var(--secondary)] mr-2">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                        <button class="text-[var(--danger)] hover:text-red-300">
                                            <i class="fas fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1002</td>
                                    <td class="font-medium">Maria Investidora</td>
                                    <td>Premium - Investidor</td>
                                    <td>2024-04-15</td>
                                    <td>Vitalício</td>
                                    <td><span class="status-badge status-active">Ativo</span></td>
                                    <td>∞</td>
                                    <td>
                                        <button class="text-[var(--primary)] hover:text-[var(--secondary)] mr-2">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                        <button class="text-[var(--danger)] hover:text-red-300">
                                            <i class="fas fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1003</td>
                                    <td class="font-medium">Carlos Looter</td>
                                    <td>Fragmento - Looter</td>
                                    <td>2024-01-10</td>
                                    <td>2024-07-10</td>
                                    <td><span class="status-badge status-expired">Expirado</span></td>
                                    <td>180 dias</td>
                                    <td>
                                        <button class="text-[var(--primary)] hover:text-[var(--secondary)] mr-2">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                        <button class="text-[var(--danger)] hover:text-red-300">
                                            <i class="fas fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <!-- Expiring Tab -->
                <div id="expiring-tab-content" class="tab-pane hidden">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-xl font-bold header-font">Contratos Próximos do Vencimento</h3>
                        <div class="flex items-center space-x-2">
                            <span class="text-sm text-gray-400">Filtro:</span>
                            <select class="bg-[var(--darkest)] border border-gray-700 rounded-lg px-3 py-1 text-sm">
                                <option>Próximos 30 dias</option>
                                <option>Próximos 60 dias</option>
                                <option>Próximos 90 dias</option>
                                <option>Todos expirados</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="bg-[var(--darkest)] rounded-lg overflow-hidden shadow-lg">
                        <table class="data-table w-full">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Usuário</th>
                                    <th>Plano</th>
                                    <th>Vencimento</th>
                                    <th>Dias Restantes</th>
                                    <th>Status</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1045</td>
                                    <td class="font-medium">Ana Consumidora</td>
                                    <td>Ganho - Consumidor</td>
                                    <td>2024-06-15</td>
                                    <td class="text-[var(--warning)] font-medium">12</td>
                                    <td><span class="status-badge status-active">Ativo</span></td>
                                    <td>
                                        <button class="text-[var(--primary)] hover:text-[var(--secondary)] mr-2">
                                            <i class="fas fa-envelope"></i>
                                        </button>
                                        <button class="text-[var(--primary)] hover:text-[var(--secondary)]">
                                            <i class="fas fa-sync-alt"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1078</td>
                                    <td class="font-medium">Pedro Investidor</td>
                                    <td>Premium - Investidor</td>
                                    <td>2024-06-28</td>
                                    <td class="text-[var(--warning)] font-medium">25</td>
                                    <td><span class="status-badge status-active">Ativo</span></td>
                                    <td>
                                        <button class="text-[var(--primary)] hover:text-[var(--secondary)] mr-2">
                                            <i class="fas fa-envelope"></i>
                                        </button>
                                        <button class="text-[var(--primary)] hover:text-[var(--secondary)]">
                                            <i class="fas fa-sync-alt"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1092</td>
                                    <td class="font-medium">Luiza Looter</td>
                                    <td>Fragmento - Looter</td>
                                    <td>2024-05-30</td>
                                    <td class="text-[var(--danger)] font-medium">-3</td>
                                    <td><span class="status-badge status-expired">Expirado</span></td>
                                    <td>
                                        <button class="text-[var(--primary)] hover:text-[var(--secondary)] mr-2">
                                            <i class="fas fa-envelope"></i>
                                        </button>
                                        <button class="text-[var(--primary)] hover:text-[var(--secondary)]">
                                            <i class="fas fa-sync-alt"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <div class="mt-6 bg-[var(--darkest)] rounded-lg p-6 shadow-lg">
                        <h4 class="text-lg font-bold header-font mb-4">Configurações de Notificação</h4>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <label class="block text-sm font-medium mb-2">Dias para notificação</label>
                                <input type="number" class="w-full bg-[var(--darker)] border border-gray-700 rounded-lg px-4 py-2" value="30">
                            </div>
                            <div>
                                <label class="block text-sm font-medium mb-2">Método de notificação</label>
                                <select class="w-full bg-[var(--darker)] border border-gray-700 rounded-lg px-4 py-2">
                                    <option>E-mail</option>
                                    <option>SMS</option>
                                    <option>Ambos</option>
                                </select>
                            </div>
                            <div class="flex items-end">
                                <button class="bg-[var(--primary)] hover:bg-[var(--secondary)] text-[var(--darkest)] font-bold px-4 py-2 rounded-lg w-full transition-all">
                                    <i class="fas fa-save mr-2"></i> Salvar Configurações
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        
        <!-- Footer -->
        <footer class="bg-[var(--darker)] p-4 text-center text-sm text-gray-400">
            <p>© 2024 Byte$ World Business | Sistema de Gestão de Usuários e Planos v2.0</p>
        </footer>
    </div>
    
    <!-- User Modal -->
    <div id="user-modal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden">
        <div class="bg-[var(--darkest)] rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div class="p-6">
                <div class="flex justify-between items-center mb-6">
                    <h3 class="text-xl font-bold header-font">Novo Usuário</h3>
                    <button onclick="closeModal('user-modal')" class="text-gray-400 hover:text-white">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-sm font-medium mb-2">Nome</label>
                        <input type="text" class="w-full bg-[var(--darker)] border border-gray-700 rounded-lg px-4 py-2">
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-2">E-mail</label>
                        <input type="email" class="w-full bg-[var(--darker)] border border-gray-700 rounded-lg px-4 py-2">
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-2">Tipo de Perfil</label>
                        <select class="w-full bg-[var(--darker)] border border-gray-700 rounded-lg px-4 py-2">
                            <option>Consumidor</option>
                            <option>Investidor</option>
                            <option>Looter</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-2">Código Convite</label>
                        <input type="text" class="w-full bg-[var(--darker)] border border-gray-700 rounded-lg px-4 py-2" placeholder="Ex: 70BC-4273">
                    </div>
                    <div class="md:col-span-2">
                        <label class="block text-sm font-medium mb-2">Senha</label>
                        <input type="password" class="w-full bg-[var(--darker)] border border-gray-700 rounded-lg px-4 py-2">
                    </div>
                </div>
                
                <div class="mt-8 flex justify-end space-x-3">
                    <button onclick="closeModal('user-modal')" class="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg">
                        Cancelar
                    </button>
                    <button class="bg-[var(--primary)] hover:bg-[var(--secondary)] text-[var(--darkest)] font-bold px-4 py-2 rounded-lg">
                        <i class="fas fa-save mr-2"></i> Salvar Usuário
                    </button>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Plan Modal -->
    <div id="plan-modal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden">
        <div class="bg-[var(--darkest)] rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div class="p-6">
                <div class="flex justify-between items-center mb-6">
                    <h3 class="text-xl font-bold header-font">Novo Plano</h3>
                    <button onclick="closeModal('plan-modal')" class="text-gray-400 hover:text-white">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-sm font-medium mb-2">Nome do Plano</label>
                        <input type="text" class="w-full bg-[var(--darker)] border border-gray-700 rounded-lg px-4 py-2" placeholder="Ex: Ganho - Consumidor">
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-2">Tipo de Inscrição</label>
                        <select class="w-full bg-[var(--darker)] border border-gray-700 rounded-lg px-4 py-2">
                            <option>Inscrição</option>
                            <option>Fragmento</option>
                            <option>Assinatura</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-2">Tipo de Usuário</label>
                        <select class="w-full bg-[var(--darker)] border border-gray-700 rounded-lg px-4 py-2">
                            <option>Consumidor</option>
                            <option>Investidor</option>
                            <option>Looter</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-2">Status</label>
                        <select class="w-full bg-[var(--darker)] border border-gray-700 rounded-lg px-4 py-2">
                            <option>Ativo</option>
                            <option>Inativo</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-2">Valor Premium (R$)</label>
                        <input type="number" step="0.01" class="w-full bg-[var(--darker)] border border-gray-700 rounded-lg px-4 py-2" placeholder="100.00">
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-2">Valor Mensal (R$)</label>
                        <input type="number" step="0.01" class="w-full bg-[var(--darker)] border border-gray-700 rounded-lg px-4 py-2" placeholder="25.00">
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-2">Dividendo Mínimo (BTS)</label>
                        <input type="number" step="0.1" class="w-full bg-[var(--darker)] border border-gray-700 rounded-lg px-4 py-2" placeholder="1.0">
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-2">Dividendo Mensal (R$)</label>
                        <input type="number" step="0.1" class="w-full bg-[var(--darker)] border border-gray-700 rounded-lg px-4 py-2" placeholder="1.5">
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-2">Nível Mínimo</label>
                        <select class="w-full bg-[var(--darker)] border border-gray-700 rounded-lg px-4 py-2">
                            <option>h1</option>
                            <option>h2</option>
                            <option>h3</option>
                            <option>h4</option>
                            <option>h5</option>
                            <option>h6</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-2">Nível Máximo</label>
                        <select class="w-full bg-[var(--darker)] border border-gray-700 rounded-lg px-4 py-2">
                            <option>h1</option>
                            <option>h2</option>
                            <option>h3</option>
                            <option>h4</option>
                            <option>h5</option>
                            <option>h6</option>
                        </select>
                    </div>
                    <div class="md:col-span-2">
                        <label class="block text-sm font-medium mb-2">Benefícios (JSON)</label>
                        <textarea class="w-full bg-[var(--darker)] border border-gray-700 rounded-lg px-4 py-2 h-32 font-mono text-sm" placeholder='{"nft": "Shark Vision", "dividendos": "1.0 BTS base", "mensal": "R$ 1.50"}'></textarea>
                    </div>
                </div>
                
                <div class="mt-8 flex justify-end space-x-3">
                    <button onclick="closeModal('plan-modal')" class="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg">
                        Cancelar
                    </button>
                    <button class="bg-[var(--primary)] hover:bg-[var(--secondary)] text-[var(--darkest)] font-bold px-4 py-2 rounded-lg">
                        <i class="fas fa-save mr-2"></i> Salvar Plano
                    </button>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Contract Modal -->
    <div id="contract-modal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden">
        <div class="bg-[var(--darkest)] rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div class="p-6">
                <div class="flex justify-between items-center mb-6">
                    <h3 class="text-xl font-bold header-font">Novo Contrato</h3>
                    <button onclick="closeModal('contract-modal')" class="text-gray-400 hover:text-white">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-sm font-medium mb-2">Usuário</label>
                        <select class="w-full bg-[var(--darker)] border border-gray-700 rounded-lg px-4 py-2">
                            <option>Selecione um usuário</option>
                            <option>João Silva</option>
                            <option>Maria Investidora</option>
                            <option>Carlos Looter</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-2">Plano</label>
                        <select class="w-full bg-[var(--darker)] border border-gray-700 rounded-lg px-4 py-2">
                            <option>Selecione um plano</option>
                            <option>Ganho - Consumidor</option>
                            <option>Premium - Investidor</option>
                            <option>Fragmento - Looter</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-2">Data de Início</label>
                        <input type="datetime-local" class="w-full bg-[var(--darker)] border border-gray-700 rounded-lg px-4 py-2">
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-2">Duração (dias)</label>
                        <input type="number" class="w-full bg-[var(--darker)] border border-gray-700 rounded-lg px-4 py-2" placeholder="365">
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-2">Tipo de Duração</label>
                        <select class="w-full bg-[var(--darker)] border border-gray-700 rounded-lg px-4 py-2">
                            <option>Fixa</option>
                            <option>Vitalício</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-2">Status</label>
                        <select class="w-full bg-[var(--darker)] border border-gray-700 rounded-lg px-4 py-2">
                            <option>Ativo</option>
                            <option>Inativo</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-2">Nível do Contrato</label>
                        <select class="w-full bg-[var(--darker)] border border-gray-700 rounded-lg px-4 py-2">
                            <option>h1</option>
                            <option>h2</option>
                            <option>h3</option>
                            <option>h4</option>
                            <option>h5</option>
                            <option>h6</option>
                        </select>
                    </div>
                    <div class="md:col-span-2">
                        <label class="block text-sm font-medium mb-2">Observações</label>
                        <textarea class="w-full bg-[var(--darker)] border border-gray-700 rounded-lg px-4 py-2 h-24"></textarea>
                    </div>
                </div>
                
                <div class="mt-8 flex justify-end space-x-3">
                    <button onclick="closeModal('contract-modal')" class="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg">
                        Cancelar
                    </button>
                    <button class="bg-[var(--primary)] hover:bg-[var(--secondary)] text-[var(--darkest)] font-bold px-4 py-2 rounded-lg">
                        <i class="fas fa-save mr-2"></i> Salvar Contrato
                    </button>
                </div>
            </div>
        </div>
    </div>
    
    <script>
        // Tab functionality
        function showTab(tabName) {
            // Hide all tab contents
            document.querySelectorAll('.tab-pane').forEach(tab => {
                tab.classList.add('hidden');
                tab.classList.remove('active');
            });
            
            // Deactivate all tab buttons
            document.querySelectorAll('.tab-button').forEach(button => {
                button.classList.remove('tab-active');
            });
            
            // Show selected tab content
            document.getElementById(`${tabName}-tab-content`).classList.remove('hidden');
            document.getElementById(`${tabName}-tab-content`).classList.add('active');
            
            // Activate selected tab button
            document.getElementById(`${tabName}-tab`).classList.add('tab-active');
        }
        
        // Modal functions
        function openUserModal() {
            document.getElementById('user-modal').classList.remove('hidden');
        }
        
        function openPlanModal() {
            document.getElementById('plan-modal').classList.remove('hidden');
        }
        
        function openContractModal() {
            document.getElementById('contract-modal').classList.remove('hidden');
        }
        
        function closeModal(modalId) {
            document.getElementById(modalId).classList.add('hidden');
        }
        
        // Initialize with users tab active
        document.addEventListener('DOMContentLoaded', () => {
            showTab('users');
        });
    </script>
</body>
</html>