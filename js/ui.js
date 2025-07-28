// Funciones de Menús (sin cambios)
function showMainMenu() { /* ... */ }
function showBrawlerSelectionScreen() { /* ... */ }
function showNameInputScreen() { /* ... */ }
function showInstructionsScreen() { /* ... */ }
function showRankingScreen() { /* ... */ }
function showEndScreen(reason) { /* ... */ }
function saveScore(name, score) { /* ... */ }
function displayRanking(rankingListElement) { /* ... */ }


// ===================================================================
// === NUEVAS FUNCIONES DE UI PARA LA BATALLA ===
// ===================================================================

/**
 * Monta la pantalla de batalla con los datos iniciales del jugador y el enemigo.
 */
function showBattleScreen(player, enemy) {
    ui.gameUI.classList.add('hidden'); // Ocultamos la UI antigua
    ui.battleScreen.classList.remove('hidden'); // Mostramos la nueva

    // --- Configurar Zona del Enemigo ---
    ui.enemyName.textContent = enemy.name;
    ui.enemyImg.src = enemy.img;
    
    // --- Configurar Zona del Jugador ---
    ui.playerName.textContent = playerName;
    ui.playerImg.src = player.img;

    // --- Configurar Panel de Acciones (Movimientos) ---
    ui.actionsPanel.innerHTML = ''; // Limpiamos acciones anteriores
    player.moves.forEach(move => {
        const moveButton = document.createElement('button');
        moveButton.className = 'choice-button bg-gray-700 border-gray-900 hover:bg-gray-600 text-white font-bold rounded-xl p-2 text-left';
        moveButton.onclick = () => handlePlayerMove(move);

        moveButton.innerHTML = `
            <div class="flex justify-between items-center">
                <span class="font-title text-lg">${move.name[currentLang]}</span>
                <span class="font-title text-sky-400">${move.cost > 0 ? `${move.cost} ⚙️` : ''}</span>
            </div>
            <p class="text-xs text-gray-300">${move.description[currentLang]}</p>
        `;
        ui.actionsPanel.appendChild(moveButton);
    });

    // Actualizar las barras de vida y stats por primera vez
    updateBattleUI(stats, enemy.stats);
}

/**
 * Actualiza todos los elementos visuales de la batalla (barras de vida, recursos, etc.).
 */
function updateBattleUI(playerStats, enemyStats) {
    // --- Actualizar Vida del Jugador ---
    const playerHealthPercent = (playerStats.vida / currentPlayerBrawler.playerStats.vida) * 100;
    ui.playerHealthBar.style.width = `${playerHealthPercent}%`;
    ui.playerHealthText.textContent = `${playerStats.vida} / ${currentPlayerBrawler.playerStats.vida}`;

    // --- Actualizar Vida del Enemigo ---
    const enemyHealthPercent = (enemyStats.vida / currentEnemyBrawler.cpuStats.vida) * 100;
    ui.enemyHealthBar.style.width = `${enemyHealthPercent}%`;
    ui.enemyHealthText.textContent = `${enemyStats.vida} / ${currentEnemyBrawler.cpuStats.vida}`;
    
    // --- Actualizar Recursos y Súper del Jugador ---
    ui.playerResourcesText.textContent = playerStats.recursos;
    ui.playerSuperText.textContent = `${playerStats.superpoder}%`;

    // Lógica para mostrar el botón de Súper (lo haremos más adelante)
    // const superButton = document.getElementById('super-ability-button');
    // if (playerStats.superpoder >= 100) {
    //     if (superButton) superButton.classList.remove('hidden');
    // } else {
    //     if (superButton) superButton.classList.add('hidden');
    // }
}

// Actualiza el texto de la narrativa de batalla
function updateBattleNarrative(text) {
    ui.battleNarrative.innerHTML = `<span>${text}</span>`;
}
