function showMainMenu() {
    stopAllMusic();
    playSound(sounds.menuMusic);
    ui.gameUI.classList.add('hidden');
    ui.battleScreen.classList.add('hidden'); // Nos aseguramos de ocultar también la pantalla de batalla

    const logoPath = currentLang === 'eu' ? 'imagenes/logo_eu.png' : 'imagenes/logo_es.png';
    
    const menuHTML = `
        <div class="flex flex-col justify-between h-full w-full max-w-md text-center py-4">
            <div class="flex-grow flex flex-col justify-center px-4">
                <img src="${logoPath}" alt="Logo del Juego" class="w-3/4 max-w-[240px] sm:max-w-[280px] mx-auto mb-6 sm:mb-8" onerror="this.style.display='none';">
                <div class="space-y-2 sm:space-y-3">
                    <button onclick="showBrawlerSelectionScreen()" class="menu-button w-full bg-blue-600 border-blue-800 hover:bg-blue-500 text-white font-bold py-2 sm:py-3 px-6 rounded-full text-lg sm:text-2xl font-title">${getText('newGame')}</button>
                    <button onclick="showInstructionsScreen()" class="menu-button w-full bg-purple-600 border-purple-800 hover:bg-purple-500 text-white font-bold py-2 sm:py-3 px-6 rounded-full text-lg sm:text-2xl font-title">${getText('instructions')}</button>
                    <button onclick="showRankingScreen()" class="menu-button w-full bg-orange-500 border-orange-700 hover:bg-orange-400 text-white font-bold py-2 sm:py-3 px-6 rounded-full text-lg sm:text-2xl font-title">${getText('ranking')}</button>
                    <button id="install-button" onclick="handleInstallClick()" class="hidden menu-button w-full bg-teal-600 border-teal-800 hover:bg-teal-500 text-white font-bold py-2 sm:py-3 px-6 rounded-full text-lg sm:text-2xl font-title">${getText('installGame')}</button>
                </div>
            </div>
            <div class="flex-shrink-0 pt-4">
                <img src="avatares/jon.png" alt="Creador del juego" class="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto" onerror="this.style.display='none'">
                <p class="font-title mt-2 text-base sm:text-lg"><span class="text-green-400">Jon</span><span class="text-gray-400"> Zabalok egina ©</span></p>
            </div>
        </div>
    `;
    ui.gameOverlay.innerHTML = menuHTML;

    const installButton = document.getElementById('install-button');
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (installButton && (deferredPrompt || isIOS)) {
        installButton.classList.remove('hidden');
    }
    ui.gameOverlay.classList.remove('hidden-overlay');
}

function showBrawlerSelectionScreen() {
    playSound(sounds.click);
    let characterCardsHTML = '';
    window.characters.forEach(char => {
        if (char.playerStats) {
            characterCardsHTML += `
                <div onclick="selectBrawlerAndStart('${char.id}')" class="bg-gray-900 rounded-2xl p-4 text-center border-4 border-gray-700 hover:border-yellow-400 cursor-pointer transition">
                    <img src="${char.img}" alt="${char.name}" class="w-24 h-24 mx-auto mb-2">
                    <h3 class="font-title text-2xl text-yellow-300">${char.name}</h3>
                    <div class="text-left text-sm mt-2 font-bold space-y-1">
                        <p>❤️ ${getText('health')}: ${char.playerStats.vida}</p>
                        <p>💥 ${getText('power')}: ${char.playerStats.poder}</p>
                        <p>⚙️ ${getText('resources')}: ${char.playerStats.recursos}</p>
                    </div>
                </div>
            `;
        }
    });

    const selectionHTML = `
        <div class="flex flex-col h-full w-full max-w-md text-center py-6">
            <h1 class="font-title text-4xl sm:text-5xl text-yellow-300 mb-6 flex-shrink-0">Elige tu Brawler</h1>
            <div class="flex-grow grid grid-cols-2 sm:grid-cols-3 gap-4 overflow-y-auto px-2">
                ${characterCardsHTML}
            </div>
            <div class="flex-shrink-0 pt-6">
                 <button onclick="showMainMenu()" class="text-gray-400 font-bold">${getText('back')}</button>
            </div>
        </div>
    `;
    ui.gameOverlay.innerHTML = selectionHTML;
}

function showNameInputScreen() {
    playSound(sounds.click);
    const selectedBrawlerData = window.characters.find(char => char.id === selectedBrawlerId);
    const brawlerName = selectedBrawlerData ? selectedBrawlerData.name : 'Brawler';

    ui.gameOverlay.innerHTML = `
        <div>
            <img src="imagenes/logo.png" alt="Logo del Juego" class="w-1/2 max-w-[180px] mx-auto mb-6">
            <h1 class="font-title text-4xl sm:text-5xl mb-6 text-yellow-300">${getText('chooseYourName')}</h1>
            <input type="text" id="player-name-input" placeholder="${brawlerName}" class="w-full mb-6 font-title">
            <button onclick="initGame()" class="menu-button w-full bg-green-500 border-green-700 hover:bg-green-400 text-white font-bold py-3 px-8 rounded-full text-xl sm:text-2xl font-title">${getText('toTheBattle')}</button>
            <button onclick="showBrawlerSelectionScreen()" class="mt-4 text-gray-400">${getText('back')}</button>
        </div>`;
}

function showInstructionsScreen() {
    playSound(sounds.click);
    ui.gameOverlay.innerHTML = `
        <div class="flex flex-col justify-between h-full w-full">
            <div class="text-center mb-4">
                <img src="imagenes/logo.png" alt="Logo" class="w-1/2 max-w-[150px] mx-auto">
            </div>
            <div class="flex-grow space-y-3 sm:space-y-4 text-left text-base sm:text-lg overflow-y-auto font-bold">
                <div class="flex items-start gap-3 sm:gap-4"><span class="text-2xl sm:text-3xl pt-1">🎯</span><div><strong class="text-yellow-300">${getText('objective')}</strong> ${getText('objectiveText')}</div></div>
                <div class="flex items-start gap-3 sm:gap-4"><span class="text-2xl sm:text-3xl pt-1">🤔</span><div><strong class="text-yellow-300">${getText('decisions')}</strong> ${getText('decisionsText')}</div></div>
                <div class="flex items-start gap-3 sm:gap-4"><span class="text-2xl sm:text-3xl pt-1">📊</span><div><strong class="text-yellow-300">${getText('stats')}</strong> ${getText('statsText')}</div></div>
                <div class="flex items-start gap-3 sm:gap-4"><span class="text-2xl sm:text-3xl pt-1">⚔️</span><div><strong class="text-yellow-300">${getText('enemies')}</strong> ${getText('enemiesText')}</div></div>
                <div class="flex items-start gap-3 sm:gap-4"><span class="text-2xl sm:text-3xl pt-1">🎁</span><div><strong class="text-yellow-300">${getText('surprises')}</strong> ${getText('surprisesText')}</div></div>
                <div class="flex items-start gap-3 sm:gap-4"><span class="text-2xl sm:text-3xl pt-1">🌟</span><div><strong class="text-yellow-300">${getText('superpowerTitle')}</strong> ${getText('superpowerText')}</div></div>
            </div>
            <div class="text-center mt-4 sm:mt-6">
                <p class="font-title text-lg"><span class="text-green-400">Jon</span><span class="text-gray-400"> Zabalok egina ©</span></p>
                <button onclick="showMainMenu()" class="menu-button w-full mt-4 bg-blue-600 border-blue-800 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full text-xl sm:text-2xl font-title">${getText('understood')}</button>
            </div>
        </div>`;
}

function showRankingScreen() {
    playSound(sounds.click);
    ui.gameOverlay.innerHTML = `
        <div class="w-full flex flex-col h-full">
            <div class="text-center mb-4">
                <img src="imagenes/logo.png" alt="Logo" class="w-1/2 max-w-[150px] mx-auto">
            </div>
            <div class="w-full max-w-md bg-gray-700 rounded-lg p-4 mb-6 mx-auto flex-grow">
                <h2 class="font-title text-2xl text-yellow-300 mb-2">${getText('rankingTitle')}</h2>
                <table class="ranking-table text-lg font-bold">
                    <thead><tr><th>${getText('rankHeader')}</th><th class="text-left">${getText('nameHeader')}</th><th>${getText('collectiblesHeader')}</th><th>${getText('assaultsHeader')}</th></tr></thead>
                    <tbody id="ranking-list-table"></tbody>
                </table>
            </div>
            <div class="flex justify-center">
                <button onclick="showMainMenu()" class="menu-button w-full max-w-xs bg-blue-600 border-blue-800 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full text-xl sm:text-2xl font-title">${getText('backToMenu')}</button>
            </div>
        </div>`;
    displayRanking(document.getElementById('ranking-list-table'));
}

function showEndScreen(reason) {
    gameOver = true;
    stopAllMusic();
    playSound(sounds.defeatMusic);
    saveScore(playerName, currentAssault);
    ui.gameUI.classList.add('hidden');
    ui.battleScreen.classList.add('hidden');
    
    ui.gameOverlay.innerHTML = `
        <div class="w-full flex flex-col items-center justify-center h-full text-center">
            <img src="avatares/momoxorro.png" alt="Villano" class="w-28 h-28 sm:w-32 sm:h-32 mb-4 object-contain" onerror="this.style.display='none'">
            <h1 class="font-title text-4xl sm:text-5xl mb-2 text-yellow-300">${getText('defeated')}</h1>
            <div class="bg-gray-900/50 rounded-lg p-3 my-2 w-full max-w-xs">
                <h2 class="text-lg font-bold text-gray-400 font-title">${getText('causeOfDeath')}</h2>
                <p class="text-lg text-red-400 font-bold">${getText(reason.reasonKey)}</p>
            </div>
            <p class="text-base sm:text-lg mb-2">${getText('youLasted')} <span class="font-bold text-yellow-300">${currentAssault}</span> ${getText('assaults')}</p>
            <p id="player-rank-text" class="text-base sm:text-lg mb-6">${getText('calculatingRank')}</p>
            <div class="w-full max-w-xs space-y-3 mt-auto">
                <button onclick="showRankingScreen()" class="menu-button w-full bg-orange-500 border-orange-700 hover:bg-orange-400 text-white font-bold py-3 px-8 rounded-full text-xl font-title">${getText('ranking')}</button>
                <button onclick="showMainMenu()" class="menu-button w-full bg-green-500 border-green-700 hover:bg-green-400 text-white font-bold py-3 px-8 rounded-full text-xl font-title">${getText('backToMenu')}</button>
            </div>
        </div>
    `;
    
    db.collection("ranking").orderBy("score", "desc").get().then(querySnapshot => {
        let rank = 0;
        let found = false;
        querySnapshot.forEach((doc, index) => {
            const entry = doc.data();
            if (!found && entry.name === playerName && entry.score === currentAssault) {
                rank = index + 1;
                found = true;
            }
        });
        const rankTextEl = document.getElementById('player-rank-text');
        if (rank > 0) {
            rankTextEl.innerHTML = getText('rankPosition', rank);
        } else if (rankTextEl) {
            rankTextEl.textContent = getText('scoreSaved');
        }
    });
    ui.gameOverlay.classList.remove('hidden-overlay');
}

function saveScore(name, score) {
    db.collection("ranking").add({ name: name, score: score, collectibles: 0 })
        .catch(error => console.error("Error al guardar en Firebase: ", error));
}

function displayRanking(rankingListElement) {
    rankingListElement.innerHTML = `<tr><td colspan="4">${getText('loading')}</td></tr>`;
    db.collection("ranking").orderBy("score", "desc").limit(5).get()
        .then(querySnapshot => {
            rankingListElement.innerHTML = '';
            if (querySnapshot.empty) {
                rankingListElement.innerHTML = `<tr><td colspan="4">${getText('beTheFirst')}</td></tr>`;
                return;
            }
            let rank = 1;
            querySnapshot.forEach(doc => {
                const entry = doc.data();
                const row = document.createElement('tr');
                row.innerHTML = `<td>${rank++}</td><td class="text-left">${entry.name.toUpperCase()}</td><td>${entry.collectibles || 0}</td><td>${entry.score}</td>`;
                rankingListElement.appendChild(row);
            });
        })
        .catch(error => {
            console.error("Error al cargar ranking: ", error);
            rankingListElement.innerHTML = `<tr><td colspan="4">${getText('errorLoadingRank')}</td></tr>`;
        });
}

function showBattleScreen(player, enemy) {
    ui.gameUI.classList.add('hidden');
    ui.battleScreen.classList.remove('hidden');

    ui.enemyName.textContent = enemy.name;
    ui.enemyImg.src = enemy.img;
    
    ui.playerName.textContent = playerName;
    ui.playerImg.src = player.img;

    ui.actionsPanel.innerHTML = '';
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
    
    updateBattleUI(stats, enemy.stats);
}

function updateBattleUI(playerStats, enemyStats) {
    const playerHealthPercent = Math.max(0, (playerStats.vida / currentPlayerBrawler.playerStats.vida) * 100);
    ui.playerHealthBar.style.width = `${playerHealthPercent}%`;
    ui.playerHealthText.textContent = `${Math.max(0, playerStats.vida)} / ${currentPlayerBrawler.playerStats.vida}`;

    const enemyHealthPercent = Math.max(0, (enemyStats.vida / currentEnemyBrawler.cpuStats.vida) * 100);
    ui.enemyHealthBar.style.width = `${enemyHealthPercent}%`;
    ui.enemyHealthText.textContent = `${Math.max(0, enemyStats.vida)} / ${currentEnemyBrawler.cpuStats.vida}`;
    
    ui.playerResourcesText.textContent = playerStats.recursos;
    ui.playerSuperText.textContent = `${playerStats.superpoder}%`;
}

function updateBattleNarrative(text) {
    ui.battleNarrative.innerHTML = `<span>${text}</span>`;
}
