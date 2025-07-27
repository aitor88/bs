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
let stats = { vida: 100, poder: 20, recursos: 5, superpoder: 0 };
let currentAssault = 1;
let gameOver = false;
let isSpecialTurn = false;
let playerName = '';
let inventory = [];

// Los datos se cargan desde los archivos `_data.js` en el scope global `window`
const characters = window.gameCharacters;
const events = window.gameEvents;
const challenges = window.gameChallenges;

// --- LÓGICA ANTI-REPETICIÓN ---
let lastCharacterName = '';
let lastEventName = '';
let dilemmaDecks = {};
let audioUnlocked = false;

// ===================================================================
// === REFERENCIAS A ELEMENTOS UI Y AUDIO ===
// ===================================================================
const ui = {
    startButtonScreen: document.getElementById('start-button-screen'),
    startButton: document.getElementById('start-game-button'),
    splashScreen: document.getElementById('splash-screen'),
    splashLogo: document.getElementById('splash-logo'),
    gameContainer: document.getElementById('game-container'),
    gameUI: document.getElementById('game-ui'),
    assaultCounter: document.getElementById('assault-counter'),
    playerNameDisplay: document.getElementById('player-name-display'),
    healthBar: document.getElementById('health-bar'), healthText: document.getElementById('health-text'),
    powerBar: document.getElementById('power-bar'), powerText: document.getElementById('power-text'),
    resourcesBar: document.getElementById('resources-bar'), resourcesText: document.getElementById('resources-text'),
    superBar: document.getElementById('super-bar'), superText: document.getElementById('super-text'),
    charImg: document.getElementById('char-img'), charName: document.getElementById('char-name'),
    dilemmaDescription: document.getElementById('dilemma-description'),
    choicesSection: document.getElementById('choices-section'),
    choice1: document.getElementById('choice-1'), choice2: document.getElementById('choice-2'),
    challengeChoicesSection: document.getElementById('challenge-choices-section'),
    superButton: document.getElementById('super-button'),
    notification: document.getElementById('notification'),
    inventoryContainer: document.getElementById('inventory-container'),
    gameOverlay: document.getElementById('game-overlay'),
    resolutionOverlay: document.getElementById('resolution-overlay'),
    resolutionTitle: document.getElementById('resolution-title'),
    resolutionNarrative: document.getElementById('resolution-narrative'),
    resolutionEffects: document.getElementById('resolution-effects'),
    resolutionContinue: document.getElementById('resolution-continue'),
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
