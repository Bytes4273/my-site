<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Byte$ 4273 | A Nova Dimensão da Economia Digital Consciente</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        
        body {
            font-family: 'Space Grotesk', sans-serif;
            background-color: #0a0a0a;
            color: #e5e5e5;
            overflow-x: hidden;
        }
        
        .gradient-text {
            background: linear-gradient(90deg, #00f0ff, #0085ff, #8a2be2);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            transition: all 0.3s ease;
        }
        
        .glow-card {
            box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }
        
        .glow-card:hover {
            box-shadow: 0 0 25px rgba(0, 255, 255, 0.5);
            transform: translateY(-5px);
        }
        
        .hexagon {
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
        
        .scroll-indicator {
            animation: bounce 2s infinite;
        }
        
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
            40% {transform: translateY(-20px);}
            60% {transform: translateY(-10px);}
        }
        
        .data-panel {
            background: rgba(15, 23, 42, 0.7);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(0, 255, 255, 0.2);
        }
        
        /* Crypto Background Elements */
        .crypto-bg {
            position: absolute;
            opacity: 0.1;
            z-index: 0;
        }
        
        .bitcoin-icon {
            position: absolute;
            animation: float 6s ease-in-out infinite;
            opacity: 0.1;
            z-index: 0;
        }
        
        .ethereum-icon {
            position: absolute;
            animation: float 8s ease-in-out infinite 1s;
            opacity: 0.1;
            z-index: 0;
        }
        
        .blockchain-line {
            position: absolute;
            height: 2px;
            background: linear-gradient(90deg, transparent, #00f0ff, transparent);
            animation: blockchainFlow 12s linear infinite;
            z-index: 0;
            will-change: transform;
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes blockchainFlow {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100vw); }
        }
        
        /* Crypto Grid Animation */
        .crypto-grid {
            position: absolute;
            width: 100%;
            height: 100%;
            background-image: 
                linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 255, 0.05) 1px, transparent 1px);
            background-size: 40px 40px;
            z-index: 0;
        }
        
        /* Animated Crypto Icons */
        .animated-crypto {
            position: absolute;
            font-size: 1.5rem;
            opacity: 0.2;
            animation: cryptoFloat 15s linear infinite;
            z-index: 0;
            will-change: transform;
        }
        
        @keyframes cryptoFloat {
            0% { transform: translateY(100vh) translateX(0); }
            100% { transform: translateY(-100px) translateX(100px); }
        }
        
        /* Content wrapper to bring elements to front */
        .content-wrapper {
            position: relative;
            z-index: 10;
        }
        
        /* Blockchain node animation */
        .blockchain-node {
            position: absolute;
            width: 8px;
            height: 8px;
            background-color: #00f0ff;
            border-radius: 50%;
            box-shadow: 0 0 10px #00f0ff;
            animation: nodePulse 2s infinite alternate;
            z-index: 0;
        }
        
        @keyframes nodePulse {
            0% { transform: scale(1); opacity: 0.3; }
            100% { transform: scale(1.5); opacity: 0.1; }
        }
        
        /* NFT card animation */
        .nft-card {
            position: relative;
            overflow: hidden;
        }
        
        .nft-card::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(
                to bottom right,
                rgba(0, 240, 255, 0) 0%,
                rgba(0, 240, 255, 0) 30%,
                rgba(0, 240, 255, 0.1) 45%,
                rgba(0, 240, 255, 0) 60%,
                rgba(0, 240, 255, 0) 100%
            );
            transform: rotate(30deg);
            animation: nftShine 6s infinite;
        }
        
        @keyframes nftShine {
            0% { transform: rotate(30deg) translate(-30%, -30%); }
            100% { transform: rotate(30deg) translate(30%, 30%); }
        }

        /* Binary animation */
        .binary-animation {
            animation: binaryEffect 0.5s steps(1);
        }
        
        @keyframes binaryEffect {
            0% { content: "101010"; }
            20% { content: "010101"; }
            40% { content: "110011"; }
            60% { content: "001100"; }
            80% { content: "111000"; }
            100% { content: "000111"; }
        }

        /* Scroll fix */
        html {
            overflow-y: scroll;
            scroll-behavior: smooth;
        }
        
        body {
            overflow-y: auto;
            min-height: 100vh;
        }

        /* Performance optimizations */
        *, *::before, *::after {
            box-sizing: border-box;
        }

        /* Mobile menu animation */
        .mobile-menu {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease-out;
        }

        .mobile-menu.open {
            max-height: 500px;
            transition: max-height 0.5s ease-in;
        }

        /* Product card styles */
        .product-card {
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .product-card:hover {
            transform: translateY(-5px);
        }

        .product-image {
            height: 200px;
            object-fit: cover;
            width: 100%;
            border-bottom: 1px solid rgba(0, 255, 255, 0.2);
        }

        .price-tag {
            background: linear-gradient(90deg, #00f0ff, #0085ff);
            color: black;
            font-weight: bold;
            padding: 0.25rem 0.5rem;
            border-radius: 0.25rem;
        }

        .buy-button {
            background: linear-gradient(90deg, #00f0ff, #0085ff);
            color: black;
            font-weight: bold;
            transition: all 0.3s ease;
        }

        .buy-button:hover {
            transform: scale(1.05);
            box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
        }
    </style>
</head>
<body>
    <!-- Crypto Background Elements -->
    <div id="crypto-bg-elements">
        <!-- Floating crypto icons -->
        <i class="fab fa-bitcoin bitcoin-icon" style="top: 10%; left: 5%; font-size: 8rem;"></i>
        <i class="fab fa-ethereum ethereum-icon" style="top: 30%; right: 8%; font-size: 6rem;"></i>
        <i class="fas fa-link bitcoin-icon" style="bottom: 15%; left: 15%; font-size: 5rem;"></i>
        <i class="fas fa-coins ethereum-icon" style="top: 70%; right: 20%; font-size: 7rem;"></i>
        
        <!-- Blockchain lines -->
        <div class="blockchain-line" style="top: 20%; width: 120%;"></div>
        <div class="blockchain-line" style="top: 50%; width: 150%; animation-delay: 3s;"></div>
        <div class="blockchain-line" style="top: 80%; width: 100%; animation-delay: 6s;"></div>
        
        <!-- Crypto grid -->
        <div class="crypto-grid"></div>
        
        <!-- Animated small crypto icons -->
        <div id="animated-crypto-icons">
            <!-- These will be added via JavaScript -->
        </div>
        
        <!-- Blockchain nodes -->
        <div id="blockchain-nodes">
            <!-- These will be added via JavaScript -->
        </div>
    </div>

    <!-- Navigation -->
    <nav class="fixed w-full bg-black bg-opacity-80 backdrop-filter backdrop-blur-lg z-50 border-b border-cyan-500 border-opacity-20 content-wrapper">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16 items-center">
                <div class="flex items-center">
                    <div class="flex-shrink-0 flex items-center">
                        <div class="hexagon w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                            <span class="text-black font-bold">B$</span>
                        </div>
                        <span class="ml-3 text-xl font-bold gradient-text">Byte$.4273</span>
                    </div>
                </div>
                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-8">
                        <a href="#about" class="text-cyan-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sobre</a>
                        <a href="#ecosystem" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Ecossistema</a>
                        <a href="#store" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Loja</a>
                        <a href="#benefits" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Benefícios</a>
                        <a href="#case" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Estudo de Caso</a>
                        <a href="#contact" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contato</a>
                    </div>
                </div>
                <div class="md:hidden">
                    <button id="mobile-menu-button" class="p-2 rounded-md text-gray-400 hover:text-white focus:outline-none">
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <!-- Mobile menu -->
        <div id="mobile-menu" class="mobile-menu md:hidden bg-black bg-opacity-90">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#about" class="text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Sobre</a>
                <a href="#ecosystem" class="text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Ecossistema</a>
                <a href="#store" class="text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Loja</a>
                <a href="#benefits" class="text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Benefícios</a>
                <a href="#case" class="text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Estudo de Caso</a>
                <a href="#contact" class="text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contato</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <div class="relative pt-24 pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900 content-wrapper">
        <div class="max-w-7xl mx-auto">
            <div class="lg:grid lg:grid-cols-12 lg:gap-8">
                <div class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                    <h1 class="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                        <span class="block">A Nova Dimensão da</span>
                        <span class="block gradient-text binary-trigger" data-original="Economia Digital Consciente">Economia Digital Consciente</span>
                    </h1>
                    <p class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                        O ecossistema que une tecnologia blockchain, educação financeira e impacto social em um modelo revolucionário de valor compartilhado.
                    </p>
                    <div class="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                        <div class="flex flex-col sm:flex-row gap-3">
                            <a href="https://bytes4273.com/ols/categories/xn--incries-nft---shark-vision-vjc60b" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700 md:py-4 md:text-lg md:px-10 transition-all duration-300">
                                Inscreva-se
                            </a>
                            <a href="#ecosystem" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 md:py-4 md:text-lg md:px-10 transition-all duration-300">
                                Saiba Mais
                            </a>
                        </div>
                    </div>
                </div>
                <div class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                    <div class="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md glow-card">
                        <div class="data-panel relative w-full h-96 rounded-lg overflow-hidden">
                            <div class="absolute inset-0 flex items-center justify-center">
                                <div class="animate-pulse flex space-x-4">
                                    <div class="flex-1 space-y-4 py-1">
                                        <div class="h-4 bg-cyan-500 rounded w-3/4"></div>
                                        <div class="space-y-2">
                                            <div class="h-4 bg-blue-500 rounded"></div>
                                            <div class="h-4 bg-blue-500 rounded w-5/6"></div>
                                        </div>
                                        <div class="h-4 bg-cyan-500 rounded w-1/2"></div>
                                        <div class="space-y-2">
                                            <div class="h-4 bg-blue-500 rounded w-3/4"></div>
                                            <div class="h-4 bg-blue-500 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                                <h3 class="text-lg font-medium text-white">Contratos</h3>
                                <p class="mt-1 text-sm text-gray-300">Visualização em tempo real - Volume do ecossistema financeiro</p>
                            </div>
                            <!-- Blockchain verification badge -->
                            <div class="absolute top-4 right-4 flex items-center">
                                <i class="fas fa-link text-cyan-400 mr-1"></i>
                                <span class="text-xs text-cyan-400">BLOCKCHAIN VERIFIED</span>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="absolute bottom-5 left-1/2 transform -translate-x-1/2 scroll-indicator">
            <svg class="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
        </div>
    </div>

    <!-- About Section -->
    <div id="about" class="py-16 bg-gray-900 overflow-hidden relative content-wrapper">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="lg:text-center">
                <h2 class="text-base text-cyan-400 font-semibold tracking-wide uppercase">Para quem é este projeto</h2>
                <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                    A Byte$ é pra você que quer <span class="gradient-text binary-trigger" data-original="transformar conhecimento em valor">transformar conhecimento em valor</span>
                </p>
                <p class="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
                    Para quem acredita que tecnologia blockchain e justiça social podem andar juntas. Para quem quer ganhar mais, entender mais e ajudar mais.
                </p>
            </div>

            <div class="mt-20">
                <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                    <div class="glow-card bg-gray-800 p-8 rounded-lg relative">
                        <div class="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                            <i class="fas fa-user-tie"></i>
                        </div>
                        <div class="mt-5">
                            <h3 class="text-lg font-medium text-white">Empreendedores</h3>
                            <p class="mt-2 text-base text-gray-300">
                                Que querem enxergar além da superfície do sistema tradicional e construir negócios com propósito.
                            </p>
                        </div>
                        <div class="absolute top-2 right-2 text-xs text-cyan-400">
                            <i class="fas fa-lock"></i> SECURE
                        </div>
                    </div>

                    <div class="glow-card bg-gray-800 p-8 rounded-lg relative">
                        <div class="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                            <i class="fas fa-chart-line"></i>
                        </div>
                        <div class="mt-5">
                            <h3 class="text-lg font-medium text-white">Investidores</h3>
                            <p class="mt-2 text-base text-gray-300">
                                Que buscam oportunidades inovadoras com retorno financeiro e impacto social positivo.
                            </p>
                        </div>
                        <div class="absolute top-2 right-2 text-xs text-cyan-400">
                            <i class="fas fa-shield-alt"></i> SAFE
                        </div>
                    </div>

                    <div class="glow-card bg-gray-800 p-8 rounded-lg relative">
                        <div class="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                            <i class="fas fa-lightbulb"></i>
                        </div>
                        <div class="mt-5">
                            <h3 class="text-lg font-medium text-white">Sonhadores</h3>
                            <p class="mt-2 text-base text-gray-300">
                                Que sentem que sempre ficaram para trás e buscam as ferramentas que o sistema escondeu.
                            </p>
                        </div>
                        <div class="absolute top-2 right-2 text-xs text-cyan-400">
                            <i class="fas fa-bolt"></i> FAST
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Ecosystem Section -->
    <div id="ecosystem" class="py-16 bg-black overflow-hidden relative content-wrapper">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="lg:text-center">
                <h2 class="text-base text-cyan-400 font-semibold tracking-wide uppercase">Ecossistema</h2>
                <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                    Como funciona a <span class="gradient-text binary-trigger" data-original="Byte$">Byte$</span>
                </p>
                <p class="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
                    Um painel visual onde cada decisão gera impacto em tempo real. Simples, transparente e transformador.
                </p>
            </div>

            <div class="mt-16">
                <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div class="glow-card bg-gray-900 p-8 rounded-lg relative">
                        <div class="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-700 text-white mb-6">
                            <i class="fas fa-coins text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-4">Mega Block-chain</h3>
                        <p class="text-gray-300 mb-4">
                            Seu token de valor e reputação dentro do ecossistema. Quanto mais você aprende e compartilha, mais Byte$ acumula.
                        </p>
                        <div class="flex items-center text-cyan-400">
                            <span>1,5 á 3% de retorno mensal</span>
                            <i class="fas fa-arrow-right ml-2"></i>
                        </div>
                        <div class="absolute bottom-4 right-4 flex items-center">
                            <span class="text-xs bg-gray-800 px-2 py-1 rounded text-cyan-400">ERC-20</span>
                        </div>
                    </div>

                    <div class="glow-card bg-gray-900 p-8 rounded-lg relative">
                        <div class="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-800 text-white mb-6">
                            <i class="fas fa-link text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-4">Byte$</h3>
                        <p class="text-gray-300 mb-4">
                            Estrutura que garante segurança e autonomia com integridade. Todas as transações são registradas de forma imutável e transparente.
                        </p>
                        <div class="flex items-center text-cyan-400">
                            <span>100% descentralizado</span>
                            <i class="fas fa-arrow-right ml-2"></i>
                        </div>
                        <div class="absolute bottom-4 right-4 flex items-center">
                            <span class="text-xs bg-gray-800 px-2 py-1 rounded text-cyan-400">PoS</span>
                        </div>
                    </div>

                    <div class="glow-card bg-gray-900 p-8 rounded-lg relative">
                        <div class="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white mb-6">
                            <img src="https://img1.wsimg.com/isteam/ip/b467ac44-bc09-4776-aba5-c0da6d43f806/Adesivos-Vestuario%20(4).png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:116,h:100,cg:true" alt="Blue Fund" class="w-12 h-12 object-contain">
                        </div>
                        <h3 class="text-xl font-bold text-white mb-4">Blue Fund</h3>
                        <p class="text-gray-300 mb-4">
                            Parte do seu rendimento é automaticamente direcionada para causas sociais e ambientais que você escolhe apoiar.
                        </p>
                        <div class="flex items-center text-cyan-400">
                            <span>Impacto mensurável</span>
                            <i class="fas fa-arrow-right ml-2"></i>
                        </div>
                        <div class="absolute bottom-4 right-4 flex items-center">
                            <span class="text-xs bg-gray-800 px-2 py-1 rounded text-cyan-400">DAO</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Store Section -->
    <div id="store" class="py-16 bg-gray-900 overflow-hidden relative content-wrapper">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="lg:text-center">
                <h2 class="text-base text-cyan-400 font-semibold tracking-wide uppercase">Ofertas Exclusivas</h2>
                <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                    <span class="gradient-text binary-trigger" data-original="Loja Byte$">Inscrição - Shark Vision</span>
                </p>
                <p class="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
                    Adquira nossos produtos e serviços premium para potencializar sua jornada na economia digital.
                </p>
            </div>

            <!-- PRODUCTS GRID -->
            <div class="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                <div class="product-card glow-card bg-gray-800 rounded-lg overflow-hidden">
                    <img src="https://img1.wsimg.com/isteam/ip/b467ac44-bc09-4776-aba5-c0da6d43f806/Tag.png/:/rs=w:984,h:673" 
                         alt="NFT Shark Vision" 
                         class="product-image">
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-white mb-2">NFT Shark Vision</h3>
                        <p class="text-gray-300 mb-4">
                            Colecionável digital exclusivo que concede acesso a benefícios premium no ecossistema.
                        </p>
                        <div class="flex justify-between items-center">
                            <span class="price-tag">$99 USD</span>
                            <a href="https://buy.stripe.com/5kQ3cvdsq0Z93I3fRm7Zu00" 
                               target="_blank" 
                               class="buy-button px-4 py-2 rounded-md flex items-center">
                                Comprar <i class="fas fa-credit-card ml-2"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="product-card glow-card bg-gray-800 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                         alt="Mentoria Financeira" 
                         class="product-image">
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-white mb-2">Mentoria Financeira</h3>
                        <p class="text-gray-300 mb-4">
                            Sessão individual com especialistas para otimizar sua estratégia de investimentos digitais.
                        </p>
                        <div class="flex justify-between items-center">
                            <span class="price-tag">$129 USD</span>
                            <a href="https://buy.stripe.com/test_00g3fV7wQ4nZ5OE144" 
                               target="_blank" 
                               class="buy-button px-4 py-2 rounded-md flex items-center">
                                Comprar <i class="fas fa-credit-card ml-2"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- 
                    INSTRUÇÕES PARA EDITAR PRODUTOS EXISTENTES:
                    Atualize qualquer um dos campos dentro do card do produto:
                    - src da imagem
                    - Título
                    - Descrição
                    - Preço
                    - Link do Stripe
                -->

                <div class="product-card glow-card bg-gray-800 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1639762681485-07447c095f5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                         alt="Pacote Iniciante" 
                         class="product-image">
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-white mb-2">Pacote Iniciante</h3>
                        <p class="text-gray-300 mb-4">
                            Tudo que você precisa para começar no mundo das criptomoedas e blockchain.
                        </p>
                        <div class="flex justify-between items-center">
                            <span class="price-tag">$29 USD</span>
                            <a href="https://buy.stripe.com/test_00g3fV7wQ4nZ5OE144" 
                               target="_blank" 
                               class="buy-button px-4 py-2 rounded-md flex items-center">
                                Comprar <i class="fas fa-credit-card ml-2"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="product-card glow-card bg-gray-800 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1621761192270-8b9abfc62e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                         alt="Relatório de Mercado" 
                         class="product-image">
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-white mb-2">Relatório de Mercado</h3>
                        <p class="text-gray-300 mb-4">
                            Análise mensal detalhada das tendências do mercado cripto e oportunidades de investimento.
                        </p>
                        <div class="flex justify-between items-center">
                            <span class="price-tag">$39 USD</span>
                            <a href="https://buy.stripe.com/test_00g3fV7wQ4nZ5OE144" 
                               target="_blank" 
                               class="buy-button px-4 py-2 rounded-md flex items-center">
                                Comprar <i class="fas fa-credit-card ml-2"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="product-card glow-card bg-gray-800 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                         alt="Workshop Presencial" 
                         class="product-image">
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-white mb-2">Workshop Presencial</h3>
                        <p class="text-gray-300 mb-4">
                            Evento exclusivo com os maiores especialistas em economia digital e blockchain.
                        </p>
                        <div class="flex justify-between items-center">
                            <span class="price-tag">$199 USD</span>
                            <a href="https://buy.stripe.com/test_00g3fV7wQ4nZ5OE144" 
                               target="_blank" 
                               class="buy-button px-4 py-2 rounded-md flex items-center">
                                Comprar <i class="fas fa-credit-card ml-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Call to Action -->
            <div class="mt-16 text-center">
                <p class="text-lg text-gray-300 mb-6">
                    Todos os pagamentos são processados de forma segura via Stripe.
                </p>
                <div class="flex items-center justify-center">
                    <i class="fab fa-cc-visa text-2xl text-gray-400 mx-2"></i>
                    <i class="fab fa-cc-mastercard text-2xl text-gray-400 mx-2"></i>
                    <i class="fab fa-cc-amex text-2xl text-gray-400 mx-2"></i>
                    <i class="fab fa-bitcoin text-2xl text-gray-400 mx-2"></i>
                    <i class="fab fa-ethereum text-2xl text-gray-400 mx-2"></i>
                </div>
            </div>
        </div>
    </div>

    <!-- Benefits Section -->
    <div id="benefits" class="py-16 bg-black overflow-hidden relative content-wrapper">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="lg:text-center">
                <h2 class="text-base text-cyan-400 font-semibold tracking-wide uppercase">Benefícios</h2>
                <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                    Ganhe <span class="gradient-text binary-trigger" data-original="aprendendo e compartilhando">aprendendo e compartilhando</span>
                </p>
                <p class="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
                    Cada ação dentro da Blue Fund gera valor real para você e para a comunidade.
                </p>
            </div>

            <div class="mt-16">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="glow-card bg-gray-800 p-8 rounded-lg relative">
                        <div class="flex">
                            <div class="flex-shrink-0">
                                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                                    <i class="fas fa-graduation-cap"></i>
                                </div>
                            </div>
                            <div class="ml-4">
                                <h3 class="text-lg font-medium text-white">Aprender = Ganhar</h3>
                                <p class="mt-2 text-gray-300">
                                    Complete cursos, participe de workshops e desafios educacionais para acumular Byte$ que podem be converted em benefícios real.
                                </p>
                            </div>
                        </div>
                        <div class="absolute bottom-4 right-4">
                            <span class="text-xs bg-gray-700 px-2 py-1 rounded-full text-cyan-400">+1,5 BT$</span>
                        </div>
                    </div>

                    <div class="glow-card bg-gray-800 p-8 rounded-lg relative">
                        <div class="flex">
                            <div class="flex-shrink-0">
                                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                                    <i class="fas fa-users"></i>
                                </div>
                            </div>
                            <div class="ml-4">
                                <h3 class="text-lg font-medium text-white">Indicar = Mega3%</h3>
                                <p class="mt-2 text-gray-300">
                                    Traga novos membros para o ecossistema e receba uma porcentagem de todas as transações que eles realizarem.
                                </p>
                            </div>
                        </div>
                        <div class="absolute bottom-4 right-4">
                            <span class="text-xs bg-gray-700 px-2 py-1 rounded-full text-cyan-400">1,5 á 3%</span>
                        </div>
                    </div>

                    <div class="glow-card nft-card bg-gray-800 p-8 rounded-lg relative">
                        <div class="flex">
                            <div class="flex-shrink-0">
                                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                                    <i class="fas fa-trophy"></i>
                                </div>
                            </div>
                            <div class="ml-4">
                                <h3 class="text-lg font-medium text-white">Desafios = Shark Vision</h3>
                                <p class="mt-2 text-gray-300">
                                    Participe de competições e conquiste NFTs exclusivos que valorizam com o tempo e podem ser negociados no marketplace.
                                </p>
                            </div>
                        </div>
                        <div class="absolute bottom-4 right-4">
                            <span class="text-xs bg-gray-700 px-2 py-1 rounded-full text-cyan-400">NFT</span>
                        </div>
                    </div>

                    <div class="glow-card bg-gray-800 p-8 rounded-lg relative">
                        <div class="flex">
                            <div class="flex-shrink-0">
                                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                                    <i class="fas fa-hands-helping"></i>
                                </div>
                            </div>
                            <div class="ml-4">
                                <h3 class="text-lg font-medium text-white">Apoiar = Reputação</h3>
                                <p class="mt-2 text-gray-300">
                                    Contribua com causas sociais e aumente sua reputação na comunidade, desbloqueando benefícios exclusivos e oportunidades.
                                </p>
                            </div>
                        </div>
                        <div class="absolute bottom-4 right-4">
                            <span class="text-xs bg-gray-700 px-2 py-1 rounded-full text-cyan-400">Mestre</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Case Study Section -->
    <div id="case" class="py-16 bg-gray-900 overflow-hidden relative content-wrapper">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="lg:text-center">
                <h2 class="text-base text-cyan-400 font-semibold tracking-wide uppercase">Transformação Real</h2>
                <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                    <span class="gradient-text binary-trigger" data-original="De Estagiária a Investidora">De Estagiária a Investidora</span>
                </p>
                <p class="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
                    Conheça a história da Leticia e como os Byte$ transformaram sua vida financeira.
                </p>
            </div>

            <div class="mt-16">
                <div class="glow-card bg-gray-800 rounded-lg overflow-hidden">
                    <div class="md:flex">
                        <div class="md:flex-shrink-0">
                            <img class="h-96 w-full object-cover md:w-80" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Letícia">
                        </div>
                        <div class="p-8">
                            <div class="uppercase tracking-wide text-sm text-cyan-400 font-semibold">Estudo de Caso</div>
                            <h3 class="mt-2 text-2xl font-semibold text-white">Leticia Rav, 24 anos</h3>
                            <p class="mt-3 text-gray-300">
                                Começou na Byte$ como curiosa. Baixou o painel, leu os termos e fez uma indicação. Ganhou 5 BT$. Participou de um desafio de educação financeira e ganhou 15 BT$.
                            </p>
                            <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div class="bg-gray-700 p-4 rounded-lg">
                                    <h4 class="text-sm font-medium text-cyan-400">Participação em Curso</h4>
                                    <p class="mt-1 text-sm text-gray-300">Inteligência Financeira Avançada</p>
                                </div>
                                <div class="bg-gray-700 p-4 rounded-lg">
                                    <h4 class="text-sm font-medium text-cyan-400">Co-criadora DAO</h4>
                                    <p class="mt-1 text-sm text-gray-300">Educacional</p>
                                </div>
                                <div class="bg-gray-700 p-4 rounded-lg">
                                    <h4 class="text-sm font-medium text-cyan-400">Lucro Mensal</h4>
                                    <p class="mt-1 text-sm text-gray-300">R$ 30,00 via engajamento</p>
                                </div>
                            </div>
                            <div class="mt-8">
                                <blockquote class="text-white italic">
                                    "O Byte$ me mostrou que é possível aprender sobre finanças de forma prática e ainda ser recompensada por isso. Hoje lidero meus estudos na faculdade de psicologia em Goiânia e  transformando nossa realidade em ações de valor."
                                </blockquote>
                            </div>
                            <div class="mt-6 flex items-center">
                                <i class="fas fa-wallet text-cyan-400 mr-2"></i>
                                <span class="text-sm text-cyan-400">Carteira Blockchain: 0x9C9fE6405b4FE92E9405b691922FCe3bB4523B63</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Start Now Section -->
    <div id="start" class="py-16 bg-gradient-to-b from-gray-900 to-black relative content-wrapper">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
                <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    <span class="block">Pronto para começar?</span>
                    <span class="block gradient-text binary-trigger" data-original="Junte-se à revolução financeira consciente">Junte-se à revolução financeira consciente</span>
                </h2>
                <p class="mt-4 max-w-2xl text-xl text-gray-300 mx-auto">
                    Você não precisa de experiência. Só precisa começar.
                </p>
                <div class="mt-8 flex justify-center">
                    <div class="inline-flex rounded-md shadow">
                        <a href="https://bytes4273.com/ols/categories/xn--incries-nft---shark-vision-vjc60b" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700 transition-all duration-300">
                            Cadastre-se Gratuitamente
                            <i class="fas fa-arrow-right ml-3"></i>
                        </a>
                    </div>
                </div>
                <div class="mt-8 flex justify-center">
                    <div class="flex items-center bg-gray-800 bg-opacity-50 px-4 py-2 rounded-full">
                        <i class="fab fa-ethereum text-cyan-400 mr-2"></i>
                        <span class="text-sm text-gray-300">Integração com Ethereum, Polygon e Binance Smart Chain</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Contact Section -->
    <div id="contact" class="py-16 bg-black overflow-hidden relative content-wrapper">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="lg:text-center">
                <h2 class="text-base text-cyan-400 font-semibold tracking-wide uppercase">Contato</h2>
                <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                    Fale com a <span class="gradient-text binary-trigger" data-original="Equipe Byte$">Equipe Byte$</span>
                </p>
                <p class="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
                    Tem dúvidas ou quer saber mais sobre o projeto? Entre em contato conosco.
                </p>
            </div>

            <div class="mt-16">
                <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div class="glow-card bg-gray-900 p-8 rounded-lg">
                        <div class="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white mb-6">
                            <i class="fas fa-globe text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-4">Website</h3>
                        <a href="https://www.bytes4273.com" class="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">www.bytes4273.com</a>
                        <div class="mt-4 flex items-center">
                            <i class="fab fa-ethereum text-cyan-400 mr-2"></i>
                            <span class="text-xs text-gray-400">DApp integrado</span>
                        </div>
                    </div>

                    <div class="glow-card bg-gray-900 p-8 rounded-lg">
                        <div class="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white mb-6">
                            <i class="fas fa-envelope text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-4">Email</h3>
                        <a href="mailto:contato@bytes4273.com" class="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">contracts.bytes@gmail.com</a>
                        <div class="mt-4 flex items-center">
                            <i class="fas fa-key text-cyan-400 mr-2"></i>
                            <span class="text-xs text-gray-400">PGP: 0x70BC.4273</span>
                        </div>
                    </div>

                    <div class="glow-card bg-gray-900 p-8 rounded-lg">
                        <div class="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white mb-6">
                            <i class="fas fa-id-card text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-4">Registro - INPI</h3>
                        <p class="text-gray-300">937640395 - Byte$</p>
                        <div class="mt-4 flex items-center">
                            <i class="fas fa-fingerprint text-cyan-400 mr-2"></i>
                            <span class="text-xs text-gray-400">Smart Contract Auditado</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-900 border-t border-gray-800 content-wrapper">
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div class="xl:grid xl:grid-cols-3 xl:gap-8">
                <div class="space-y-8 xl:col-span-1">
                    <div class="flex items-center">
                        <div class="flex-shrink-0 flex items-center">
                            <div class="hexagon w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                                <span class="text-black font-bold">B$</span>
                            </div>
                            <span class="ml-3 text-xl font-bold gradient-text">Byte$.4273</span>
                        </div>
                    </div>
                    <p class="text-gray-300 text-base">
                        A nova dimensão da economia digital consciente. Transformando conhecimento em valor compartilhado.
                    </p>
                    <div class="flex space-x-6">
                        <a href="#" class="text-gray-400 hover:text-cyan-400">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-cyan-400">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-cyan-400">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-cyan-400">
                            <i class="fab fa-discord"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-cyan-400">
                            <i class="fab fa-telegram"></i>
                        </a>
                    </div>
                </div>
                <div class="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                    <div class="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h3 class="text-sm font-semibold text-cyan-400 tracking-wider uppercase">Soluções</h3>
                            <ul class="mt-4 space-y-4">
                                <li>
                                    <a href="#" class="text-base text-gray-300 hover:text-white">Educação Financeira</a>
                                </li>
                                <li>
                                    <a href="#" class="text-base text-gray-300 hover:text-white">Investimento Consciente</a>
                                </li>
                                <li>
                                    <a href="#" class="text-base text-gray-300 hover:text-white">Impacto Social</a>
                                </li>
                                <li>
                                    <a href="#" class="text-base text-gray-300 hover:text-white">Tecnologia Blockchain</a>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-12 md:mt-0">
                            <h3 class="text-sm font-semibold text-cyan-400 tracking-wider uppercase">Suporte</h3>
                            <ul class="mt-4 space-y-4">
                                <li>
                                    <a href="#" class="text-base text-gray-300 hover:text-white">FAQ</a>
                                </li>
                                <li>
                                    <a href="#" class="text-base text-gray-300 hover:text-white">Tutoriais</a>
                                </li>
                                <li>
                                    <a href="#" class="text-base text-gray-300 hover:text-white">Comunidade</a>
                                </li>
                                <li>
                                    <a href="#" class="text-base text-gray-300 hover:text-white">Termos de Uso</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h3 class="text-sm font-semibold text-cyan-400 tracking-wider uppercase">Empresa</h3>
                            <ul class="mt-4 space-y-4">
                                <li>
                                    <a href="#" class="text-base text-gray-300 hover:text-white">Sobre Nós</a>
                                </li>
                                <li>
                                    <a href="#" class="text-base text-gray-300 hover:text-white">Equipe</a>
                                </li>
                                <li>
                                    <a href="#" class="text-base text-gray-300 hover:text-white">Parceiros</a>
                                </li>
                                <li>
                                    <a href="#" class="text-base text-gray-300 hover:text-white">Carreiras</a>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-12 md:mt-0">
                            <h3 class="text-sm font-semibold text-cyan-400 tracking-wider uppercase">Legal</h3>
                            <ul class="mt-4 space-y-4">
                                <li>
                                    <a href="#" class="text-base text-gray-300 hover:text-white">Privacidade</a>
                                </li>
                                <li>
                                    <a href="#" class="text-base text-gray-300 hover:text-white">Segurança</a>
                                </li>
                                <li>
                                    <a href="#" class="text-base text-gray-300 hover:text-white">Regulamentos</a>
                                </li>
                                <li>
                                    <a href="#" class="text-base text-gray-300 hover:text-white">Compliance</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-12 border-t border-gray-800 pt-8">
                <p class="text-base text-gray-400 text-center">
                    O foturo só depende de você.
                </p>
                  <p class="text-base text-gray-400 text-center">
                    &copy; 2023 Byte$.4273 / Todos os direitos reservados no INPI.
                </p>
                <div class="mt-4 flex justify-center space-x-4">
                    <span class="text-xs bg-gray-800 px-2 py-1 rounded text-cyan-400">ERC-20</span>
                    <span class="text-xs bg-gray-800 px-2 py-1 rounded text-cyan-400">PoS</span>
                    <span class="text-xs bg-gray-800 px-2 py-1 rounded text-cyan-400">DAO</span>
                    <span class="text-xs bg-gray-800 px-2 py-1 rounded text-cyan-400">NFT</span>
                </div>
            </div>
        </div>
    </footer>

    <script>
        // Mobile menu toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('open');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Animate elements when they come into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fadeIn');
                }
            });
        }, {
            threshold: 0.1
        });

        document.querySelectorAll('.glow-card').forEach(card => {
            observer.observe(card);
        });

        // Create animated crypto icons
        const cryptoIcons = [
            'fab fa-bitcoin', 'fab fa-ethereum', 'fab fa-monero', 
            'fas fa-link', 'fas fa-coins', 'fab fa-btc',
            'fas fa-wallet', 'fas fa-key', 'fas fa-shield-alt'
        ];
        
        const cryptoContainer = document.getElementById('animated-crypto-icons');
        
        for (let i = 0; i < 15; i++) {
            const icon = document.createElement('i');
            icon.className = `${cryptoIcons[Math.floor(Math.random() * cryptoIcons.length)]} animated-crypto`;
            
            // Random positioning
            const left = Math.random() * 100;
            const delay = Math.random() * 15;
            const duration = 10 + Math.random() * 20;
            
            icon.style.left = `${left}%`;
            icon.style.animationDuration = `${duration}s`;
            icon.style.animationDelay = `${delay}s`;
            
            cryptoContainer.appendChild(icon);
        }
        
        // Create blockchain nodes
        const nodesContainer = document.getElementById('blockchain-nodes');
        
        for (let i = 0; i < 20; i++) {
            const node = document.createElement('div');
            node.className = 'blockchain-node';
            
            // Random positioning
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            const delay = Math.random() * 5;
            
            node.style.left = `${left}%`;
            node.style.top = `${top}%`;
            node.style.animationDelay = `${delay}s`;
            
            nodesContainer.appendChild(node);
        }
        
        // Binary effect on click for titles
        document.querySelectorAll('.binary-trigger').forEach(el => {
            el.addEventListener('click', function() {
                const originalText = this.textContent;
                const originalHTML = this.innerHTML;
                const originalLength = originalText.length;
                
                // Store original text if not already stored
                if (!this.dataset.original) {
                    this.dataset.original = originalText;
                }
                
                // Start animation
                let counter = 0;
                const steps = 10;
                const interval = setInterval(() => {
                    if (counter < steps) {
                        // Generate random binary-like text
                        let binaryText = '';
                        for (let i = 0; i < originalLength; i++) {
                            binaryText += Math.random() > 0.5 ? '0' : '1';
                        }
                        this.textContent = binaryText;
                        counter++;
                    } else {
                        // Restore original text
                        this.innerHTML = originalHTML;
                        clearInterval(interval);
                    }
                }, 50);
            });
        });
    </script>
</body>
</html>
