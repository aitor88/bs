// js/audio.js
function unlockAudio() {
    if (audioUnlocked) return;
    for (const key in sounds) {
        sounds[key].play().catch(() => {});
        sounds[key].pause();
        sounds[key].currentTime = 0;
    }
    audioUnlocked = true;
}

function playSound(sound) {
    if (!audioUnlocked) return;
    sound.currentTime = 0;
    sound.play().catch(e => {});
}

function stopAllMusic() {
    sounds.menuMusic.pause();
    sounds.gameMusic.pause();
    sounds.defeatMusic.pause();
    sounds.menuMusic.currentTime = 0;
    sounds.gameMusic.currentTime = 0;
    sounds.defeatMusic.currentTime = 0;
}
