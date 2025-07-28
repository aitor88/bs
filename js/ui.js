function updateUI() {
    // ... (sin cambios)
}

function updateInventoryUI() {
    // ... (sin cambios)
}

function showResolution(title, narrative, effects) {
    // ... (sin cambios)
}

function showEndScreen(reason) {
    // ... (sin cambios)
}

function saveScore(name, score, collectibles) {
    // ... (sin cambios)
}

function displayRanking(rankingListElement) {
    // ... (sin cambios)
}

function showMainMenu() {
    // ... (sin cambios, usa showBrawlerSelectionScreen)
}

function showBrawlerSelectionScreen() {
    playSound(sounds.click);

    let characterCardsHTML = '';
    window.gameCharacters.forEach(char => {
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
    // ... (sin cambios)
}

function showInstructionsScreen() {
    // ... (sin cambios)
}

function showRankingScreen() {
    // ... (sin cambios)
}
