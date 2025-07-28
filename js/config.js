// ===================================================================
// === INICIALIZACIÓN DE FIREBASE ===
// ===================================================================
const firebaseConfig = {
    apiKey: "AIzaSyDFhLfNxTGZqPa8BEDhDJ9GMqUXkBCYAn0",
    authDomain: "juego-brawl-stars-ranking.firebaseapp.com",
    projectId: "juego-brawl-stars-ranking",
    storageBucket: "juego-brawl-stars-ranking.appspot.com",
    messagingSenderId: "11560476574",
    appId: "1:11560476574:web:0603074665db720fdd008f"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// ===================================================================
// === ESTADO Y DATOS DEL JUEGO ===
// ===================================================================
let currentLang = 'es';
let stats = { vida: 100, poder: 20, recursos: 5, superpoder: 0 };
let currentAssault = 1;
let gameOver = false;
let playerName = '';
let selectedBrawlerId = null; 

// Nuevas variables para el estado del combate
let currentPlayerBrawler = null;
let currentEnemyBrawler = null;

const characters = window.gameCharacters;

let audioUnlocked = false;

// ===================================================================
// === REFERENCIAS A ELEMENTOS UI Y AUDIO ===
// ===================================================================
const ui = {
    startButtonScreen: document.getElementById('start-button-screen'),
    splashScreen: document.getElementById('splash-screen'),
    splashLogo: document.getElementById('splash-logo'),
    gameContainer: document.getElementById('game-container'),
    
    // UI Antigua (se oculta en batalla)
    gameUI: document.getElementById('game-ui'),
    
    // Nueva UI de Batalla
    battleScreen: document.getElementById('battle-screen'),
    enemyName: document.getElementById('enemy-name'),
    enemyHealthBar: document.getElementById('enemy-health-bar'),
    enemyHealthText: document.getElementById('enemy-health-text'),
    enemyImg: document.getElementById('enemy-img'),
    battleNarrative: document.getElementById('battle-narrative'),
    playerName: document.getElementById('player-name'),
    playerHealthBar: document.getElementById('player-health-bar'),
    playerHealthText: document.getElementById('player-health-text'),
    playerImg: document.getElementById('player-img'),
    playerResourcesText: document.getElementById('player-resources-text'),
    playerSuperText: document.getElementById('player-super-text'),
    actionsPanel: document.getElementById('actions-panel'),

    // Overlays y otros
    gameOverlay: document.getElementById('game-overlay'),
    notification: document.getElementById('notification'),
};

const sounds = {
    splash: document.getElementById('sound-splash'),
    click: document.getElementById('sound-click'),
    correct: document.getElementById('sound-correct'),
    wrong: document.getElementById('sound-wrong'),
    super: document.getElementById('sound-super'),
    event: document.getElementById('sound-event'),
    menuMusic: document.getElementById('music-menu'),
    gameMusic: document.getElementById('music-game'),
    defeatMusic: document.getElementById('music-defeat'),
};
