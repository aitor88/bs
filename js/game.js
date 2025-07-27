// ===================================================================
// === UTILIDADES ===
// ===================================================================
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function createDilemmaDecks() {
    dilemmaDecks = {};
    characters.forEach(char => {
        dilemmaDecks[char.name] = shuffleArray([...char.dilemmas]);
    });
}

// ===================================================================
// === LÓGICA PRINCIPAL DEL JUEGO ===
// ===================================================================
function initGame() {
    playSound(sounds.click);
    stopAllMusic();
    sounds.gameMusic.loop = true; // Asegurarse de que la música del juego sea en bucle
    playSound(sounds.gameMusic);
    
    playerName = document.getElementById('player-name-input').value.trim() || 'Brawler';
    stats = { vida: 100, poder: 20, recursos: 5, superpoder: 0 };
    currentAssault = 1;
    gameOver = false;
    inventory = [];
    lastCharacterName = '';
    lastEventName = '';
    
    createDilemmaDecks();
    updateInventoryUI();
    
    ui.gameOverlay.classList.add('hidden-overlay');
    ui.gameUI.classList.remove('hidden');
    
    nextAssault();
}

function nextAssault() {
    if (gameOver) return;
    ui.choicesSection.classList.remove('hidden');
    ui.challengeChoicesSection.classList.add('hidden');
    
    let char;
    do {
        char = characters[Math.floor(Math.random() * characters.length)];
    } while (char.name === lastCharacterName && characters.length > 1);
    lastCharacterName = char.name;

    if (dilemmaDecks[char.name].length === 0) {
        // Si se acaban los dilemas de un personaje, se reinician todos los mazos.
        createDilemmaDecks();
    }
    const dilemma = dilemmaDecks[char.name].pop();
    
    ui.charImg.classList.add('rounded-full');
    ui.charImg.classList.remove('rounded-lg');
    ui.charImg.style.display = 'block';
    ui.charName.textContent = char.name;
    ui.charImg.src = char.img;
    ui.charImg.onerror = () => { ui.charImg.src = `https://placehold.co/150x150/cccccc/ffffff?text=${char.name.substring(0,2)}`; };
    ui.dilemmaDescription.innerHTML = dilemma.description;
    
    ui.choice1.textContent = dilemma.options[0].text;
    ui.choice2.textContent = dilemma.options[1].text;
    ui.choice1.onclick = () => { playSound(sounds.click); chooseOption(dilemma.options[0], char.name); };
    ui.choice2.onclick = () => { playSound(sounds.click); chooseOption(dilemma.options[1], char.name); };
    
    updateUI();
}

function chooseOption(action, charName) {
    if (gameOver) return;
    
    if (action.cost && stats.recursos < action.cost) {
        ui.notification.textContent = "¡No tienes suficientes recursos!";
        ui.notification.classList.remove('hidden-overlay');
        setTimeout(() => { ui.notification.classList.add('hidden-overlay'); }, 2000);
        return;
    }

    let combinedEffects = { ...action.effects };
    if(action.cost) {
        combinedEffects.recursos = (combinedEffects.recursos || 0) - action.cost;
    }

    let narrative = action.narrative;
    const baseDamage = 2 + currentAssault; 
    const finalDamage = Math.max(1, baseDamage - Math.floor(stats.poder / 10));
    combinedEffects.vida = (combinedEffects.vida || 0) - finalDamage;
    narrative += ` Los enemigos contraatacan.`;
    
    isSpecialTurn = false; 
    showResolution(charName, narrative, combinedEffects);
}

function useSuper() {
    if (stats.superpoder < 100) {
        ui.notification.textContent = "¡No tienes superpoder suficiente!";
        ui.notification.classList.remove('hidden-overlay');
        setTimeout(() => { ui.notification.classList.add('hidden-overlay'); }, 2000);
        return;
    }
    playSound(sounds.super);
    const superEffects = { superpoder: -100, vida: 25, poder: 25, recursos: 1 };
    isSpecialTurn = true;
    showResolution('¡SUPERPODER!', '¡Un impulso de poder te da vida, poder y un recurso extra!', superEffects);
}

function handleContinueClick() {
    playSound(sounds.click);
    ui.resolutionOverlay.classList.add('hidden-overlay');
    
    if (checkGameOver()) return;

    if (!isSpecialTurn) {
        currentAssault++;
    }
    updateUI();
    
    const rand = Math.random();
    if (rand < 0.2 && events.length > 0) { 
        triggerRandomEvent();
    } else if (rand < 0.35 && challenges.length > 0) {
        triggerRandomChallenge();
    } else {
        nextAssault();
    }
}

function triggerRandomEvent() {
    playSound(sounds.event);
    let event;
    do {
        event = events[Math.floor(Math.random() * events.length)];
    } while (event.name === lastEventName && events.length > 1);
    lastEventName = event.name;

    isSpecialTurn = true;
    if (event.type === 'immediate') {
        showResolution(`¡EVENTO: ${event.name}!`, event.narrative, event.effects);
    } else if (event.type === 'choice') {
        displayEventChoice(event);
    } else {
        nextAssault(); // Fallback por si hay un tipo de evento no reconocido
    }
}

function displayEventChoice(event) {
    ui.charImg.classList.remove('rounded-full');
    ui.charImg.classList.add('rounded-lg');
    ui.charImg.style.display = 'block';
    ui.charImg.src = event.img;
    ui.charImg.onerror = () => { ui.charImg.style.display = 'none'; };
    ui.charName.textContent = `¡EVENTO: ${event.name}!`;
    ui.dilemmaDescription.innerHTML = event.message;
    ui.choice1.textContent = event.options[0].text;
    ui.choice2.textContent = event.options[1].text;
    ui.choice1.onclick = () => { playSound(sounds.click); showResolution(event.name, event.options[0].narrative, event.options[0].effects); };
    ui.choice2.onclick = () => { playSound(sounds.click); showResolution(event.name, event.options[1].narrative, event.options[1].effects); };
}

function triggerRandomChallenge() {
    playSound(sounds.event);
    const challengeGroup = challenges[Math.floor(Math.random() * challenges.length)];
    isSpecialTurn = true;

    let difficulty;
    if (currentAssault <= 5) { difficulty = "easy"; }
    else if (currentAssault <= 10) { difficulty = "medium"; }
    else { difficulty = "hard"; }

    let availableQuestions = challengeGroup.questions.filter(q => q.difficulty === difficulty);
    if (availableQuestions.length === 0) { availableQuestions = challengeGroup.questions; } // Fallback a cualquier dificultad
    if (availableQuestions.length === 0) { nextAssault(); return; } // Si no hay preguntas, no hacer nada

    const challenge = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];

    ui.choicesSection.classList.add('hidden');
    ui.challengeChoicesSection.classList.remove('hidden');
    ui.charImg.classList.remove('rounded-full');
    ui.charImg.classList.add('rounded-lg');
    ui.charImg.src = `https://placehold.co/150x150/a855f7/ffffff?text=?`;
    ui.charName.textContent = "¡ACERTIJO!";
    ui.dilemmaDescription.innerHTML = challenge.challenge;
    
    const buttons = Array.from(ui.challengeChoicesSection.children);
    const shuffledOptions = [...challenge.options].sort(() => Math.random() - 0.5);
    
    buttons.forEach((button, index) => {
        const option = shuffledOptions[index];
        button.textContent = option.text;
        button.onclick = () => {
            if (option.correct) {
                playSound(sounds.correct);
                if (!inventory.some(item => item.name === challengeGroup.reward.name)) {
                    inventory.push(challengeGroup.reward);
                }
                updateInventoryUI();
                showResolution("¡CORRECTO!", challenge.success, { superpoder: 15, recursos: 1 });
            } else {
                playSound(sounds.wrong);
                showResolution("¡INCORRECTO!", challenge.failure, { vida: -5 });
            }
        };
    });
}

function checkGameOver() {
    if (gameOver) return false;
    let reason = null;
    if (stats.vida <= 0) reason = { title: '¡Sin Vida!', text: 'La vida de tu escuadrón ha llegado a cero.' };
    if (stats.poder >= 100) reason = { title: '¡Poder Descontrolado!', text: 'Tu poder es tan alto que has perdido el control.' };
    if (stats.recursos > 10) reason = { title: '¡Avaricia!', text: 'Has acumulado demasiados recursos y te has vuelto un blanco fácil.' };

    if (reason) {
        showEndScreen(reason);
        return true;
    }
    return false;
}


// ===================================================================
// === INICIO DEL JUEGO Y EVENT LISTENERS ===
// ===================================================================
ui.superButton.onclick = useSuper;
ui.resolutionContinue.onclick = handleContinueClick;
    
document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-game-button');
    startButton.addEventListener('click', () => {
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
        });

    }, { once: true });
});
