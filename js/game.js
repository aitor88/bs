// js/game.js
function selectBrawlerAndStart(brawlerId) {
    playSound(sounds.click);
    selectedBrawlerId = brawlerId;
    showNameInputScreen(); 
}

function initGame() {
    currentPlayerBrawler = window.characters.find(char => char.id === selectedBrawlerId);
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
    
    stats = { 
        ...currentPlayerBrawler.playerStats,
        superpoder: 0
    };

    currentAssault = 0;
    gameOver = false;
    
    ui.gameOverlay.classList.add('hidden-overlay');
    
    startNextBattle();
}

function startNextBattle() {
    currentAssault++;
    
    let enemyOptions = window.characters.filter(char => char.cpuStats && char.id !== selectedBrawlerId);
    if (enemyOptions.length === 0) {
        enemyOptions = window.characters.filter(char => char.id !== selectedBrawlerId);
    }

    const enemyData = { ...enemyOptions[Math.floor(Math.random() * enemyOptions.length)] };
    
    currentEnemyBrawler = {
        ...enemyData,
        stats: { ...enemyData.cpuStats }
    };

    showBattleScreen(currentPlayerBrawler, currentEnemyBrawler);
    updateBattleNarrative(`¡Asalto ${currentAssault}! ¡Te enfrentas a ${currentEnemyBrawler.name}!`);
}

function handlePlayerMove(move) {
    if (gameOver) return;

    if (stats.recursos < move.cost) {
        updateBattleNarrative("¡No tienes suficientes recursos para ese movimiento!");
        return;
    }
    stats.recursos -= move.cost;

    let damageDealt = 0;
    if (move.damage > 0) {
        damageDealt = move.damage + Math.floor(stats.poder / 2);
        currentEnemyBrawler.stats.vida -= damageDealt;
    }
    
    if (move.effects) {
        if (move.effects.self) {
            for (const key in move.effects.self) {
                stats[key] = (stats[key] || 0) + move.effects.self[key];
            }
        }
    }
    stats.vida = Math.min(currentPlayerBrawler.playerStats.vida, stats.vida);
    stats.superpoder = Math.min(100, stats.superpoder);

    updateBattleUI(stats, currentEnemyBrawler.stats);
    updateBattleNarrative(`${playerName} usa ${move.name[currentLang]}. ¡Causa ${damageDealt} de daño!`);

    if (currentEnemyBrawler.stats.vida <= 0) {
        playSound(sounds.correct);
        updateBattleNarrative(`¡Has derrotado a ${currentEnemyBrawler.name}!`);
        setTimeout(startNextBattle, 2000);
    } else {
        ui.actionsPanel.style.pointerEvents = 'none';
        setTimeout(handleEnemyTurn, 1500);
    }
}

function handleEnemyTurn() {
    if (gameOver) return;

    const enemyMove = currentEnemyBrawler.moves[Math.floor(Math.random() * currentEnemyBrawler.moves.length)];
    
    let damageDealt = 0;
    if (enemyMove.damage > 0) {
        damageDealt = enemyMove.damage + Math.floor(currentEnemyBrawler.stats.poder / 2) - Math.floor(stats.poder / 4);
        damageDealt = Math.max(1, damageDealt);
        stats.vida -= damageDealt;
    }

    if (enemyMove.effects && enemyMove.effects.self) {
         for (const key in enemyMove.effects.self) {
            currentEnemyBrawler.stats[key] = (currentEnemyBrawler.stats[key] || 0) + enemyMove.effects.self[key];
        }
    }
    currentEnemyBrawler.stats.vida = Math.min(currentEnemyBrawler.cpuStats.vida, currentEnemyBrawler.stats.vida);

    updateBattleUI(stats, currentEnemyBrawler.stats);
    updateBattleNarrative(`${currentEnemyBrawler.name} usa ${enemyMove.name[currentLang]}. ¡Te causa ${damageDealt} de daño!`);

    if (stats.vida <= 0) {
        checkGameOver();
    } else {
        ui.actionsPanel.style.pointerEvents = 'auto';
    }
}

function checkGameOver() {
    if (stats.vida <= 0) {
        gameOver = true;
        setTimeout(() => showEndScreen({ reasonKey: 'defeatedReasonNoHealth' }), 1500);
        return true;
    }
    return false;
}

let deferredPrompt; 
window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); deferredPrompt = e; });

function handleInstallClick() {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(({ outcome }) => {
      if (outcome === 'accepted') {
        const installButton = document.getElementById('install-button');
        if(installButton) installButton.classList.add('hidden');
      }
      deferredPrompt = null;
    });
  } else if (isIOS) {
    document.getElementById('ios-install-instructions').classList.remove('hidden');
  } else {
    alert("Para instalar la app, busca la opción 'Instalar' en el menú de tu navegador.");
  }
}

function setLanguage(lang) {
    currentLang = lang;
    unlockAudio();
    ui.startButtonScreen.classList.add('hidden-overlay');
    ui.splashScreen.classList.remove('hidden-overlay');
    ui.splashLogo.classList.add('animate');
    
    ui.splashLogo.addEventListener('animationend', (event) => {
        if (event.animationName === 'dropIn') {
            ui.splashLogo.classList.add('shake');
            playSound(sounds.splash);
            
            setTimeout(() => {
                ui.splashScreen.style.opacity = 0;
                ui.gameContainer.classList.remove('hidden');
                showMainMenu();
                setTimeout(() => ui.splashScreen.style.display = 'none', 500);
            }, 500);
        }
    }, { once: true });
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('lang-es-button').addEventListener('click', () => setLanguage('es'));
    document.getElementById('lang-eu-button').addEventListener('click', () => setLanguage('eu'));
    
    document.getElementById('close-ios-install').addEventListener('click', () => {
        document.getElementById('ios-install-instructions').classList.add('hidden');
    });
});
