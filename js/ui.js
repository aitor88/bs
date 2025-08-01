function updateUI() {
    // Actualizamos las etiquetas de las estadísticas con sus traducciones
    const statsContainer = document.getElementById('stats-container');
    statsContainer.querySelector('span.text-green-400').innerHTML = `❤️ ${getText('health')}`;
    statsContainer.querySelector('span.text-orange-400').innerHTML = `💥 ${getText('power')}`;
    statsContainer.querySelector('span.text-sky-400').innerHTML = `⚙️ ${getText('resources')}`;
    statsContainer.querySelector('span.text-yellow-400:not(.text-300)').innerHTML = `🌟 ${getText('superpower')}`;

    const playerLabel = ui.playerNameDisplay.parentElement.querySelector('span:first-child');
    if (playerLabel) playerLabel.textContent = `${getText('player')}: `;
    const assaultLabel = ui.assaultCounter.parentElement.querySelector('span:first-child');
    if (assaultLabel) assaultLabel.textContent = `${getText('assault')} `;
    
    // Actualizamos el resto de la UI
    ui.assaultCounter.textContent = currentAssault;
    ui.playerNameDisplay.textContent = playerName;
    ui.healthBar.style.width = `${stats.vida}%`; ui.healthText.textContent = `${stats.vida}`;
    ui.powerBar.style.width = `${stats.poder}%`; ui.powerText.textContent = `${stats.poder}`;
    ui.resourcesBar.style.width = `${(stats.recursos / 10) * 100}%`; ui.resourcesText.textContent = `${stats.recursos} / 10`;
    ui.superBar.style.width = `${stats.superpoder}%`; ui.superText.textContent = `${stats.superpoder}%`;
    ui.superButton.disabled = stats.superpoder < 100;
    ui.superButton.textContent = getText('super');
}

function updateInventoryUI() {
    ui.inventoryContainer.innerHTML = '';
    if (inventory.length === 0) {
        const emptyText = document.createElement('span');
        emptyText.className = 'text-gray-500 text-sm italic px-2';
        emptyText.textContent = getText('emptyInventory');
        ui.inventoryContainer.appendChild(emptyText);
    } else {
        inventory.forEach(item => {
            const itemEl = document.createElement('img');
            itemEl.className = 'inventory-item';
            itemEl.src = item.image;
            
            let tooltipText = item.name[currentLang] || item.name['es'];
            if (item.passiveEffect) {
                const effectDesc = item.passiveEffect.description[currentLang] || item.passiveEffect.description['es'];
                tooltipText += `\n(${effectDesc})`;
            }
            itemEl.title = tooltipText;

            itemEl.onerror = () => { itemEl.style.display = 'none'; };
            ui.inventoryContainer.appendChild(itemEl);
        });
    }
}

function showResolution(title, narrative, effects) {
    let effectDescriptions = [];

    if (activeEffects.healing_boost && effects.vida > 0) {
        effects.vida = Math.round(effects.vida * activeEffects.healing_boost.value);
    }
    if (activeEffects.super_charge_boost && effects.superpoder > 0) {
        effects.superpoder += activeEffects.super_charge_boost.value;
    }

    for (const key in effects) {
        if (effects[key] === 0) continue;
        const value = effects[key];
        stats[key] = Math.round(stats[key] + value);
    }
    
    for (const key in stats) {
        stats[key] = Math.max(0, (key === 'recursos' ? Math.min(10, stats[key]) : Math.min(100, stats[key])));
    }
    if (activeEffects.power_floor && stats.poder < activeEffects.power_floor.value) {
        stats.poder = activeEffects.power_floor.value;
    }
    
    updateUI(); 

    for (const key in effects) {
        const value = effects[key];
        if (value === 0) continue;
        const icon = {vida: '❤️', poder: '💥', recursos: '⚙️', superpoder: '🌟'}[key];
        const statName = {vida: getText('health'), poder: getText('power'), recursos: getText('resources'), superpoder: getText('superpower')}[key];
        const change = value > 0 ? `+${value}` : `${value}`;
        const color = value > 0 ? 'text-green-400' : 'text-red-400';
        effectDescriptions.push(`<p class="${color}">${icon} ${statName}: ${change}</p>`);
    }

    ui.resolutionTitle.textContent = title;
    ui.resolutionNarrative.innerHTML = narrative;
    ui.resolutionEffects.innerHTML = effectDescriptions.join('');
    ui.resolutionContinue.textContent = getText('continue');
    ui.resolutionOverlay.classList.remove('hidden-overlay');
}

function showEndScreen(reason) {
    gameOver = true;
    stopAllMusic();
    playSound(sounds.defeatMusic);
    saveScore(playerName, currentAssault, inventory.length);
    ui.gameUI.classList.add('hidden');
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

function saveScore(name, score, collectibles) {
    db.collection("ranking").add({ name, score, collectibles })
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

function showMainMenu() {
    stopAllMusic();
    playSound(sounds.menuMusic);
    ui.gameUI.classList.add('hidden');

    const logoPath = currentLang === 'eu' ? 'imagenes/logo_eu.png' : 'imagenes/logo_es.png';
    
    const menuHTML = `
        <div class="flex flex-col justify-between h-full w-full max-w-md text-center py-4">
            <div class="flex-grow flex flex-col justify-center px-4">
                <img src="${logoPath}" alt="Logo del Juego" class="w-3/4 max-w-[240px] sm:max-w-[280px] mx-auto mb-6 sm:mb-8" onerror="this.style.display='none';">
                <div class="space-y-2 sm:space-y-3">
                    <button onclick="showNameInputScreen()" class="menu-button w-full bg-blue-600 border-blue-800 hover:bg-blue-500 text-white font-bold py-2 sm:py-3 px-6 rounded-full text-lg sm:text-2xl font-title">${getText('newGame')}</button>
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

function showNameInputScreen() {
    playSound(sounds.click);
    const logoPath = currentLang === 'eu' ? 'imagenes/logo_eu.png' : 'imagenes/logo_es.png';
    ui.gameOverlay.innerHTML = `
        <div>
            <img src="${logoPath}" alt="Logo del Juego" class="w-1/2 max-w-[180px] mx-auto mb-6">
            <h1 class="font-title text-4xl sm:text-5xl mb-6 text-yellow-300">${getText('chooseYourName')}</h1>
            <input type="text" id="player-name-input" placeholder="${getText('writeYourName')}" class="w-full mb-6 font-title">
            <button onclick="initGame()" class="menu-button w-full bg-green-500 border-green-700 hover:bg-green-400 text-white font-bold py-3 px-8 rounded-full text-xl sm:text-2xl font-title">${getText('toTheBattle')}</button>
            <button onclick="showMainMenu()" class="mt-4 text-gray-400">${getText('back')}</button>
        </div>`;
}

function showInstructionsScreen() {
    playSound(sounds.click);
    const logoPath = currentLang === 'eu' ? 'imagenes/logo_eu.png' : 'imagenes/logo_es.png';
    ui.gameOverlay.innerHTML = `
        <div class="flex flex-col justify-between h-full w-full">
            <div class="text-center mb-4">
                <img src="${logoPath}" alt="Logo" class="w-1/2 max-w-[150px] mx-auto">
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
    const logoPath = currentLang === 'eu' ? 'imagenes/logo_eu.png' : 'imagenes/logo_es.png';
    ui.gameOverlay.innerHTML = `
        <div class="w-full flex flex-col h-full">
            <div class="text-center mb-4">
                <img src="${logoPath}" alt="Logo" class="w-1/2 max-w-[150px] mx-auto">
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
