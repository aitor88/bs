// Función auxiliar para obtener textos del objeto de traducciones
const getText = (key, ...args) => {
    // Asegurarse de que translations y la clave de idioma existen
    if (!translations || !translations[currentLang]) {
        console.error(`Idioma "${currentLang}" no encontrado en las traducciones.`);
        return key; // Devuelve la clave como fallback
    }
    const translation = translations[currentLang][key];
    if (!translation) {
        console.error(`Clave de traducción "${key}" no encontrada para el idioma "${currentLang}".`);
        return key; // Devuelve la clave como fallback
    }
    if (typeof translation === 'function') {
        return translation(...args);
    }
    return translation;
};

function updateUI() {
    // Actualizamos las cabeceras de las estadísticas con sus traducciones
    document.querySelector('span.text-green-400').innerHTML = `❤️ ${getText('health')}`;
    document.querySelector('span.text-orange-400').innerHTML = `💥 ${getText('power')}`;
    document.querySelector('span.text-sky-400').innerHTML = `⚙️ ${getText('resources')}`;
    document.querySelector('span.text-yellow-400:not(.text-yellow-300)').innerHTML = `🌟 ${getText('superpower')}`;
    
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
            itemEl.title = item.name[currentLang]; // Asumimos que el nombre del item también está traducido
            itemEl.onerror = () => { itemEl.style.display = 'none'; };
            ui.inventoryContainer.appendChild(itemEl);
        });
    }
}

function showResolution(title, narrative, effects) {
    let effectDescriptions = [];
    for (const key in effects) {
        if (effects[key] === 0) continue;
        const value = effects[key];
        stats[key] = Math.round(stats[key] + value);
    }
    
    for (const key in stats) {
        if (key === 'recursos') {
            stats[key] = Math.max(0, Math.min(10, stats[key]));
        } else {
            stats[key] = Math.max(0, Math.min(100, stats[key]));
        }
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
        <div class="w-full flex flex-col items-center justify-center h-full">
            <img src="avatares/momoxorro.png" alt="Villano" class="w-28 h-28 sm:w-32 sm:h-32 mb-4 object-contain" onerror="this.style.display='none'">
            <h1 class="font-title text-4xl sm:text-5xl mb-2 text-yellow-300">${getText('defeated')}</h1>
            <p class="text-lg mb-2 text-red-400 font-bold">${getText(reason.reasonKey)}</p>
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
        querySnapshot.forEach((doc, index) => {
            if (rank === 0 && doc.data().name === playerName && doc.data().score === currentAssault) {
                rank = index + 1;
            }
        });
        const rankTextEl = document.getElementById('player-rank-text');
        if (rank > 0) {
            rankTextEl.innerHTML = getText('rankPosition', rank);
        } else {
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
    ui.gameOverlay.innerHTML = `
        <div class="flex flex-col justify-between h-full w-full max-w-md text-center">
            <div class="flex-grow flex flex-col justify-center">
                <img src="imagenes/logo.png" ...>
                <div class="space-y-3">
                    <button onclick="showNameInputScreen()" class="menu-button ...">${getText('newGame')}</button>
                    <button onclick="showInstructionsScreen()" class="menu-button ...">${getText('instructions')}</button>
                    <button onclick="showRankingScreen()" class="menu-button ...">${getText('ranking')}</button>
                </div>
            </div>
            ...
        </div>`;
    ui.gameOverlay.classList.remove('hidden-overlay');
}

function showNameInputScreen() {
    playSound(sounds.click);
    ui.gameOverlay.innerHTML = `
        <div>
            <img src="imagenes/logo.png" ...>
            <h1 class="font-title ...">${getText('chooseYourName')}</h1>
            <input type="text" id="player-name-input" placeholder="${getText('writeYourName')}" ...>
            <button onclick="initGame()" class="menu-button ...">${getText('toTheBattle')}</button>
            <button onclick="showMainMenu()" class="mt-4 text-gray-400">${getText('back')}</button>
        </div>`;
}

function showInstructionsScreen() {
    playSound(sounds.click);
    ui.gameOverlay.innerHTML = `
        <div class="flex flex-col justify-between h-full w-full">
            ...
            <div class="flex-grow space-y-3 ...">
                <div><strong>${getText('objective')}</strong> ${getText('objectiveText')}</div>
                <div><strong>${getText('decisions')}</strong> ${getText('decisionsText')}</div>
                <div><strong>${getText('stats')}</strong> ${getText('statsText')}</div>
                <div><strong>${getText('enemies')}</strong> ${getText('enemiesText')}</div>
                <div><strong>${getText('surprises')}</strong> ${getText('surprisesText')}</div>
                <div><strong>${getText('superpowerTitle')}</strong> ${getText('superpowerText')}</div>
            </div>
            <div class="text-center mt-4 ...">
                ...
                <button onclick="showMainMenu()" class="menu-button ...">${getText('understood')}</button>
            </div>
        </div>`;
}

function showRankingScreen() {
    playSound(sounds.click);
    ui.gameOverlay.innerHTML = `
        <div class="w-full flex flex-col h-full">
            ...
            <div class="w-full max-w-md ...">
                <h2 class="font-title ...">${getText('rankingTitle')}</h2>
                <table class="ranking-table ...">
                    <thead><tr><th>${getText('rankHeader')}</th><th class="text-left">${getText('nameHeader')}</th><th>${getText('collectiblesHeader')}</th><th>${getText('assaultsHeader')}</th></tr></thead>
                    <tbody id="ranking-list-table"></tbody>
                </table>
            </div>
            <div class="flex justify-center">
                <button onclick="showMainMenu()" class="menu-button ...">${getText('backToMenu')}</button>
            </div>
        </div>`;
    displayRanking(document.getElementById('ranking-list-table'));
}
