const playPauseBtn = document.getElementById('playPauseBtn');
const audioPlayer = document.getElementById('audioPlayer');
const volumeControl = document.getElementById('volumeControl');
const volumeLabel = document.getElementById('volumeLabel');

// Função para controlar Play/Pause
playPauseBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.textContent = '⏸️'; // Muda para o botão de pause
    } else {
        audioPlayer.pause();
        playPauseBtn.textContent = '▶️'; // Muda para o botão de play
    }
});

// Função para controlar o volume
volumeControl.addEventListener('input', () => {
    audioPlayer.volume = volumeControl.value;
    volumeLabel.textContent = `Volume: ${(volumeControl.value * 100).toFixed(0)}%`;
});
