const mario = document.getElementById('mario');
let isJumping = false;
let marioPosition = 10;

// Função para pular
function jump() {
    if (isJumping) return;
    isJumping = true;
    let jumpHeight = 150;
    let jumpInterval = setInterval(() => {
        if (jumpHeight <= 0) {
            clearInterval(jumpInterval);
            // Descida (gravidade)
            let fallInterval = setInterval(() => {
                let currentBottom = parseInt(mario.style.bottom || 0);
                if (currentBottom <= 0) {
                    clearInterval(fallInterval);
                    isJumping = false;
                }
                mario.style.bottom = `${currentBottom - 5}px`;
            }, 20);
        }
        let currentBottom = parseInt(mario.style.bottom || 0);
        mario.style.bottom = `${currentBottom + 5}px`;
        jumpHeight -= 5;
    }, 20);
}

// Movimentação do Mario
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        marioPosition += 5;
        mario.style.left = `${marioPosition}px`;
    }
    if (event.key === 'ArrowLeft') {
        marioPosition -= 5;
        mario.style.left = `${marioPosition}px`;
    }
    if (event.key === 'ArrowUp') {
        jump();
    }
});