// Pegando os elementos principais
const naruto = document.getElementById('naruto');
const sasuke = document.getElementById('sasuke');
const gameArea = document.getElementById('gameArea');

// Variáveis de controle do jogo
let narutoHealth = 100;
let sasukeHealth = 100;

// Movimentação de Naruto
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        let left = parseInt(naruto.style.left) || 0;
        if (left > 0) {
            naruto.style.left = left - 10 + 'px';
        }
    } else if (e.key === 'ArrowRight') {
        let left = parseInt(naruto.style.left) || 0;
        if (left < gameArea.offsetWidth - 50) {
            naruto.style.left = left + 10 + 'px';
        }
    } else if (e.key === 'ArrowUp') {
        let bottom = parseInt(naruto.style.bottom) || 0;
        if (bottom < gameArea.offsetHeight - 100) {
            naruto.style.bottom = bottom + 10 + 'px';
        }
    } else if (e.key === 'ArrowDown') {
        let bottom = parseInt(naruto.style.bottom) || 0;
        if (bottom > 0) {
            naruto.style.bottom = bottom - 10 + 'px';
        }
    }
});

// Movimentação de Sasuke
document.addEventListener('keydown', (e) => {
    if (e.key === 'a') {
        let left = parseInt(sasuke.style.left) || 0;
        if (left > 0) {
            sasuke.style.left = left - 10 + 'px';
        }
    } else if (e.key === 'd') {
        let left = parseInt(sasuke.style.left) || 0;
        if (left < gameArea.offsetWidth - 50) {
            sasuke.style.left = left + 10 + 'px';
        }
    } else if (e.key === 'w') {
        let bottom = parseInt(sasuke.style.bottom) || 0;
        if (bottom < gameArea.offsetHeight - 100) {
            sasuke.style.bottom = bottom + 10 + 'px';
        }
    } else if (e.key === 's') {
        let bottom = parseInt(sasuke.style.bottom) || 0;
        if (bottom > 0) {
            sasuke.style.bottom = bottom - 10 + 'px';
        }
    }
});

// Ataque de Naruto
document.addEventListener('keydown', (e) => {
    if (e.key === ' ') {
        const attack = document.createElement('div');
        attack.classList.add('attack');
        attack.style.left = parseInt(naruto.style.left) + 50 + 'px';
        attack.style.bottom = parseInt(naruto.style.bottom) + 50 + 'px';
        gameArea.appendChild(attack);

        const attackInterval = setInterval(() => {
            const attackLeft = parseInt(attack.style.left);
            if (attackLeft > parseInt(sasuke.style.left) && attackLeft < parseInt(sasuke.style.left) + 50) {
                sasukeHealth -= 10;
                console.log(`Sasuke Health: ${sasukeHealth}`);
                clearInterval(attackInterval);
                attack.remove();
            }
        }, 20);
    }
});
