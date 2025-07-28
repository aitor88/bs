// ===================================================================
// === LÓGICA DE INICIO DE JUEGO ===
// ===================================================================

function selectBrawlerAndStart(brawlerId) {
    playSound(sounds.click);
    selectedBrawlerId = brawlerId;
    showNameInputScreen(); 
}

function initGame() {
    currentPlayerBrawler = window.gameCharacters.find(char => char.id === selectedBrawlerId);
    if (!currentPlayerBrawler) {
        console.error("No se ha seleccionado un Brawler válido.");
        showMainMenu();
        return;
    }

    playSound(sounds.click);
    stopAllMusic();
    sounds.gameMusic.loop = true;
    playSound(sounds.gameMusic);
    
    playerName = document.getElementById('player-name-input').value.trim() || currentPlayerBrawler.name;
    
    // Clonamos las estadísticas para poder modificarlas durante la partida
    stats = { 
        ...currentPlayerBrawler.playerStats,
        superpoder: 0
    };

    currentAssault = 0; // Empezamos en asalto 0, el 1 será la primera batalla
    gameOver = false;
    
    ui.gameOverlay.classList.add('hidden-overlay');
    
    // ¡Empezamos la primera batalla!
    startNextBattle();
}


// ===================================================================
// === NUEVO BUCLE DE JUEGO: LÓGICA DE COMBATE ===
// ===================================================================

/**
 * Inicia la siguiente batalla contra un enemigo aleatorio.
 */
function startNextBattle() {
    currentAssault++;
    
    // Elegimos un enemigo aleatorio que no sea el propio jugador
    let enemyOptions = window.gameCharacters.filter(char => char.id !== selectedBrawlerId);
    currentEnemyBrawler = { ...enemyOptions[Math.floor(Math.random() * enemyOptions.length)] };
    
    // Clonamos sus stats para poder modificarlas
    currentEnemyBrawler.stats = { ...currentEnemyBrawler.cpuStats };

    // Montamos la interfaz de batalla
    showBattleScreen(currentPlayerBrawler, currentEnemyBrawler);
    updateBattleNarrative(`¡Asalto ${currentAssault}! ¡Te enfrentas a ${currentEnemyBrawler.name}!`);
}

/**
 * Se ejecuta cuando el jugador elige un movimiento.
 */
function handlePlayerMove(move) {
    // 1. Comprobar si tenemos suficientes recursos
    if (stats.recursos < move.cost) {
        updateBattleNarrative("¡No tienes suficientes recursos para ese movimiento!");
        return;
    }
    stats.recursos -= move.cost;

    // 2. Calcular daño y aplicar efectos
    let damageDealt = 0;
    if (move.damage > 0) {
        damageDealt = move.damage + Math.floor(stats.poder / 2);
        currentEnemyBrawler.stats.vida -= damageDealt;
    }
    
    // Aplicar otros efectos (sobre sí mismo o el enemigo)
    if (move.effects) {
        if (move.effects.self) {
            for (const key in move.effects.self) {
                stats[key] = (stats[key] || 0) + move.effects.self[key];
            }
        }
    }

    updateBattleUI(stats, currentEnemyBrawler.stats);
    updateBattleNarrative(`${playerName} usa ${move.name[currentLang]}. ¡Causa ${damageDealt} de daño!`);

    // 3. Comprobar si el enemigo ha sido derrotado
    if (currentEnemyBrawler.stats.vida <= 0) {
        playSound(sounds.correct);
        updateBattleNarrative(`¡Has derrotado a ${currentEnemyBrawler.name}!`);
        // Esperamos un momento y empezamos la siguiente batalla
        setTimeout(startNextBattle, 2000);
    } else {
        // Si no, es el turno del enemigo
        setTimeout(handleEnemyTurn, 1500);
    }
}

/**
 * Lógica simple para el turno del enemigo.
 */
function handleEnemyTurn() {
    // IA muy simple: elige un movimiento al azar de su lista
    const enemyMove = currentEnemyBrawler.moves[Math.floor(Math.random() * currentEnemyBrawler.moves.length)];
    
    // Calcular daño
    let damageDealt = 0;
    if (enemyMove.damage > 0) {
        damageDealt = enemyMove.damage + Math.floor(currentEnemyBrawler.stats.poder / 2) - Math.floor(stats.poder / 4);
        damageDealt = Math.max(1, damageDealt); // Mínimo 1 de daño
        stats.vida -= damageDealt;
    }

    // Aplicar efectos (ej. si el enemigo se cura)
    if (enemyMove.effects && enemyMove.effects.self) {
         for (const key in enemyMove.effects.self) {
            currentEnemyBrawler.stats[key] = (currentEnemyBrawler.stats[key] || 0) + enemyMove.effects.self[key];
        }
    }

    updateBattleUI(stats, currentEnemyBrawler.stats);
    updateBattleNarrative(`${currentEnemyBrawler.name} usa ${enemyMove.name[currentLang]}. ¡Te causa ${damageDealt} de daño!`);

    // Comprobar si el jugador ha sido derrotado
    if (stats.vida <= 0) {
        gameOver = true;
        setTimeout(() => showEndScreen({ reasonKey: 'defeatedReasonNoHealth' }), 1500);
    }
}


// ===================================================================
// === FUNCIONES AUXILIARES Y DE INICIO ===
// ===================================================================
let deferredPrompt; 
window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); deferredPrompt = e; });

function handleInstallClick() { /* ... */ }
function setLanguage(lang) { /* ... */ }

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('lang-es-button').addEventListener('click', () => setLanguage('es'));
    document.getElementById('lang-eu-button').addEventListener('click', () => setLanguage('eu'));
    document.getElementById('close-ios-install').addEventListener('click', () => {
        document.getElementById('ios-install-instructions').classList.add('hidden');
    });
});
