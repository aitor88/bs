function updateUI() {
    ui.assaultCounter.textContent = currentAssault;
    ui.playerNameDisplay.textContent = playerName;
    ui.healthBar.style.width = `${stats.vida}%`; ui.healthText.textContent = `${stats.vida}`;
    ui.powerBar.style.width = `${stats.poder}%`; ui.powerText.textContent = `${stats.poder}`;
    ui.resourcesBar.style.width = `${(stats.recursos / 10) * 100}%`; ui.resourcesText.textContent = `${stats.recursos} / 10`;
    ui.superBar.style.width = `${stats.superpoder}%`; ui.superText.textContent = `${stats.superpoder}%`;
    ui.superButton.disabled = stats.superpoder < 100;
}

function updateInventoryUI() {
    ui.inventoryContainer.innerHTML = '';
    if (inventory.length === 0) {
        const emptyText = document.createElement('span');
        emptyText.className = 'text-gray-500 text-sm italic px-2';
        emptyText.textContent = 'Inventario vacío';
        ui.inventoryContainer.appendChild(emptyText);
    } else {
        inventory.forEach(item => {
            const itemEl = document.createElement('img');
            itemEl.className = 'inventory-item';
            itemEl.src = item.image;
            itemEl.title = item.name;
            itemEl.onerror = () => { itemEl.style.display = 'none'; };
            ui.inventoryContainer.appendChild(itemEl);
        });
    }
}

function showResolution(title, narrative, effects) {
    let effectDescriptions = [];
    // Aplicar efectos a las estadísticas
    for (const key in effects) {
        if (effects[key] === 0) continue;
        const value = effects[key];
        stats[key] = Math.round(stats[key] + value);
    }
    
    // Normalizar estadísticas (asegurarse de que estén dentro de los límites)
    for (const key in stats) {
        if (key === 'recursos') {
            stats[key] = Math.max(0, Math.min(10, stats[key]));
        } else {
            stats[key] = Math.max(0, Math.min(100, stats[key]));
        }
    }
    
    updateUI(); // Actualizar las barras de UI con los nuevos valores

    // Crear descripciones de los efectos para mostrar en la resolución
    for (const key in effects) {
        const value = effects[key];
        if (value === 0) continue;
        const icon = {vida: '❤️', poder: '💥', recursos: '⚙️', superpoder: '🌟'}[key];
        const name = {vida: 'Vida', poder: 'Poder', recursos: 'Recursos', superpoder: 'Superpoder'}[key];
        const change = value > 0 ? `+${value}` : `${value}`;
        const color = value > 0 ? 'text-green-400' : 'text-red-400';
        effectDescriptions.push(`<p class="${color}">${icon} ${name}: ${change}</p>`);
    }

    ui.resolutionTitle.textContent = title;
    ui.resolutionNarrative.innerHTML = narrative;
    ui.resolutionEffects.innerHTML = effectDescriptions.join('');
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
            <h1 class="font-title text-4xl sm:text-5xl mb-2 text-yellow-300">¡DERROTADO!</h1>
            <p class="text-lg mb-2 text-red-400 font-bold">${reason.text}</p>
            <p class="text-base sm:text-lg mb-2">Has aguantado <span class="font-bold text-yellow-300">${currentAssault}</span> asaltos.</p>
            <p id="player-rank-text" class="text-base sm:text-lg mb-6">Calculando tu posición en el ranking...</p>
            
            <div class="w-full max-w-xs space-y-3 mt-auto">
                <button onclick="showRankingScreen()" class="menu-button w-full bg-orange-500 border-orange-700 hover:bg-orange-400 text-white font-bold py-3 px-8 rounded-full text-xl font-title">Ver Ranking</button>
                <button onclick="showMainMenu()" class="menu-button w-full bg-green-500 border-green-700 hover:bg-green-400 text-white font-bold py-3 px-8 rounded-full text-xl font-title">Menú Principal</button>
            </div>
        </div>
    `;
    
    // Calcular la posición en el ranking
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
        const rankText = document.getElementById('player-rank-text');
        if (rank > 0) {
            rankText.innerHTML = `¡Has quedado en la <span class="font-bold text-yellow-300">${rank}ª</span> posición!`;
        } else {
            rankText.textContent = 'Tu puntuación ha sido guardada.';
        }
    });

    ui.gameOverlay.classList.remove('hidden-overlay');
}

function saveScore(name, score, collectibles) {
    db.collection("ranking").add({
        name: name,
        score: score,
        collectibles: collectibles
    }).catch(error => console.error("Error al guardar en Firebase: ", error));
}

function displayRanking(rankingListElement) {
    rankingListElement.innerHTML = '<tr><td colspan="4">Cargando...</td></tr>';
    db.collection("ranking").orderBy("score", "desc").limit(5).get()
        .then((querySnapshot) => {
            rankingListElement.innerHTML = '';
            if (querySnapshot.empty) {
                rankingListElement.innerHTML = '<tr><td colspan="4">¡Sé el primero en jugar!</td></tr>';
                return;
            }
            let rank = 1;
            querySnapshot.forEach((doc) => {
                const entry = doc.data();
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${rank++}</td>
                    <td class="text-left">${entry.name.toUpperCase()}</td>
                    <td>${entry.collectibles || 0}</td>
                    <td>${entry.score}</td>
                `;
                rankingListElement.appendChild(row);
            });
        })
        .catch(error => {
            console.error("Error al cargar ranking: ", error);
            rankingListElement.innerHTML = '<tr><td colspan="4">Error al cargar ranking.</td></tr>';
        });
}

function showMainMenu() {
    stopAllMusic();
    playSound(sounds.menuMusic);
    ui.gameUI.classList.add('hidden');
    const menuHTML = `
        <div class="flex flex-col justify-between h-full w-full max-w-md text-center">
            <div class="flex-grow flex flex-col justify-center">
                <img src="imagenes/logo.png" alt="Logo del Juego" class="w-3/4 max-w-[280px] mx-auto mb-8 sm:mb-12" onerror="this.style.display='none'; document.getElementById('fallback-title').classList.remove('hidden')">
                <h1 id="fallback-title" class="hidden font-title text-4xl sm:text-6xl mb-12 text-yellow-300">Brawl Stars : Batalla Infinita</h1>
                <div class="space-y-3">
                    <button onclick="showNameInputScreen()" class="menu-button w-full bg-blue-600 border-blue-800 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full text-xl sm:text-2xl font-title">Nueva Partida</button>
                    <button onclick="showInstructionsScreen()" class="menu-button w-full bg-purple-600 border-purple-800 hover:bg-purple-500 text-white font-bold py-3 px-8 rounded-full text-xl sm:text-2xl font-title">Instrucciones</button>
                    <button onclick="showRankingScreen()" class="menu-button w-full bg-orange-500 border-orange-700 hover:bg-orange-400 text-white font-bold py-3 px-8 rounded-full text-xl sm:text-2xl font-title">Ranking</button>
                </div>
            </div>
            <div class="pb-2">
                <img src="avatares/jon.png" alt="Creador del juego" class="w-20 h-20 rounded-full mx-auto" onerror="this.style.display='none'">
                <p class="font-title mt-2 text-lg"><span class="text-green-400">Jon</span><span class="text-gray-400"> Zabalok egina ©</span></p>
            </div>
        </div>
    `;
    ui.gameOverlay.innerHTML = menuHTML;
    ui.gameOverlay.classList.remove('hidden-overlay');
}

function showNameInputScreen() {
    playSound(sounds.click);
    ui.gameOverlay.innerHTML = `
        <div>
            <img src="imagenes/logo.png" alt="Logo del Juego" class="w-1/2 max-w-[180px] mx-auto mb-6">
            <h1 class="font-title text-4xl sm:text-5xl mb-6 text-yellow-300">Elige tu Nombre</h1>
            <input type="text" id="player-name-input" placeholder="Escribe tu nombre" class="w-full mb-6 font-title">
            <button onclick="initGame()" class="menu-button w-full bg-green-500 border-green-700 hover:bg-green-400 text-white font-bold py-3 px-8 rounded-full text-xl sm:text-2xl font-title">¡A la Batalla!</button>
            <button onclick="showMainMenu()" class="mt-4 text-gray-400">Volver</button>
        </div>
    `;
}

function showInstructionsScreen() {
    playSound(sounds.click);
    ui.gameOverlay.innerHTML = `
        <div class="flex flex-col justify-between h-full w-full">
            <div class="text-center mb-4">
                <img src="imagenes/logo.png" alt="Logo" class="w-1/2 max-w-[150px] mx-auto">
            </div>
            <div class="flex-grow space-y-3 sm:space-y-4 text-left text-base sm:text-lg overflow-y-auto font-bold">
                <div class="flex items-start gap-3 sm:gap-4"><span class="text-2xl sm:text-3xl pt-1">🎯</span><div><strong class="text-yellow-300">OBJETIVO:</strong> ¡Aguanta el máximo de asaltos que puedas!</div></div>
                <div class="flex items-start gap-3 sm:gap-4"><span class="text-2xl sm:text-3xl pt-1">🤔</span><div><strong class="text-yellow-300">DECISIONES:</strong> En cada turno, un Brawler te dará dos opciones. ¡Elige con cuidado!</div></div>
                <div class="flex items-start gap-3 sm:gap-4"><span class="text-2xl sm:text-3xl pt-1">📊</span><div><strong class="text-yellow-300">ESTADÍSTICAS:</strong> Tus elecciones afectan a tu Vida, Poder, Recursos y Superpoder.</div></div>
                <div class="flex items-start gap-3 sm:gap-4"><span class="text-2xl sm:text-3xl pt-1">⚔️</span><div><strong class="text-yellow-300">ENEMIGOS:</strong> Después de cada turno, los enemigos atacan. ¡El poder defensivo es clave!</div></div>
                <div class="flex items-start gap-3 sm:gap-4"><span class="text-2xl sm:text-3xl pt-1">🎁</span><div><strong class="text-yellow-300">SORPRESAS:</strong> A veces, aparecerán eventos y acertijos con grandes recompensas.</div></div>
                <div class="flex items-start gap-3 sm:gap-4"><span class="text-2xl sm:text-3xl pt-1">🌟</span><div><strong class="text-yellow-300">SUPERPODER:</strong> Al 100%, ¡úsalo para obtener una gran ventaja!</div></div>
            </div>
            <div class="text-center mt-4 sm:mt-6">
                <p class="font-title text-lg"><span class="text-green-400">Jon</span><span class="text-gray-400"> Zabalok egina ©</span></p>
                <button onclick="showMainMenu()" class="menu-button w-full mt-4 bg-blue-600 border-blue-800 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full text-xl sm:text-2xl font-title">Entendido</button>
            </div>
        </div>
    `;
}

function showRankingScreen() {
    playSound(sounds.click);
    ui.gameOverlay.innerHTML = `
        <div class="w-full flex flex-col h-full">
            <div class="text-center mb-4">
                <img src="imagenes/logo.png" alt="Logo" class="w-1/2 max-w-[150px] mx-auto">
            </div>
            <div class="w-full max-w-md bg-gray-700 rounded-lg p-4 mb-6 mx-auto flex-grow">
                <h2 class="font-title text-2xl text-yellow-300 mb-2">🏆 Ranking 🏆</h2>
                <table class="ranking-table text-lg font-bold">
                    <thead><tr><th>#</th><th class="text-left">Nombre</th><th>💎</th><th>Asaltos</th></tr></thead>
                    <tbody id="ranking-list-table"></tbody>
                </table>
            </div>
            <div class="flex justify-center">
                <button onclick="showMainMenu()" class="menu-button w-full max-w-xs bg-blue-600 border-blue-800 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full text-xl sm:text-2xl font-title">Volver al Menú</button>
            </div>
        </div>
    `;
    displayRanking(document.getElementById('ranking-list-table'));
}
