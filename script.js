// Pegando os elementos principais
const goku = document.getElementById('goku');
const vegeta = document.getElementById('vegeta');
const gokuAttack = document.getElementById('gokuAttack');
const vegetaAttack = document.getElementById('vegetaAttack');

// Função para movimentar Goku
document.addEventListener('keydown', (e) => {
    const gokuLeft = parseInt(goku.style.left);
    const gokuBottom = parseInt(goku.style.bottom);
    
    if (e.key === 'ArrowLeft' && gokuLeft > 0) {
        goku.style.left = gokuLeft - 10 + 'px';
    }
    if (e.key === 'ArrowRight' && gokuLeft < 740) {
        goku.style.left = gokuLeft + 10 + 'px';
    }
    if (e.key === 'ArrowUp' && gokuBottom < 300) {
        goku.style.bottom = gokuBottom + 10 + 'px';
    }
    if (e.key === 'ArrowDown' && gokuBottom > 0) {
        goku.style.bottom = gokuBottom - 10 + 'px';
    }

    // Kamehameha (Ataque de Goku)
    if (e.key === ' ') {
        attackGoku();
    }
});

// Função para movimentar Vegeta
document.addEventListener('keydown', (e) => {
    const vegetaLeft = parseInt(vegeta.style.left);
    const vegetaBottom = parseInt(vegeta.style.bottom);
    
    if (e.key === 'a' && vegetaLeft > 0) {
        vegeta.style.left = vegetaLeft - 10 + 'px';
    }
    if (e.key === 'd' && vegetaLeft < 740) {
        vegeta.style.left = vegetaLeft + 10 + 'px';
    }
    if (e.key === 'w' && vegetaBottom < 300) {
        vegeta.style.bottom = vegetaBottom + 10 + 'px';
    }
    if (e.key === 's' && vegetaBottom > 0) {
        vegeta.style.bottom = vegetaBottom - 10 + 'px';
    }

    // Final Flash (Ataque de Vegeta)
    if (e.key === 'f') {
        attackVegeta();
    }
});

// Função de ataque de Goku (Kamehameha)
function attackGoku() {
    gokuAttack.style.visibility = 'visible';
    gokuAttack.style.left = parseInt(goku.style.left) + 60 + 'px';
    gokuAttack.style.bottom = parseInt(goku.style.bottom) + 30 + 'px';
    gokuAttack.style.animation = 'attackAnimationGoku 2s forwards';
    setTimeout(() => {
        gokuAttack.style.visibility = 'hidden';
    }, 2000);
}

// Função de ataque de Vegeta (Final Flash)
function attackVegeta() {
    vegetaAttack.style.visibility = 'visible';
    vegetaAttack.style.left = parseInt(vegeta.style.left) - 10 + 'px';
    vegetaAttack.style.bottom = parseInt(vegeta.style.bottom) + 30 + 'px';
    vegetaAttack.style.animation = 'attackAnimationVegeta 2s forwards';
    setTimeout(() => {
        vegetaAttack.style.visibility = 'hidden';
    }, 2000);
}
