const grid = document.querySelector('.grid');
const scoreDisplay = document.querySelector('.score span');
const width = 15;
let currentSnake = [2, 1, 0]; // Posições da cobrinha no grid
let direction = 1; // 1 = direita, -1 = esquerda, width = baixo, -width = cima
let foodIndex = 0;
let score = 0;
let squares = [];

function createGrid() {
    for (let i = 0; i < width * width; i++) {
        const square = document.createElement('div');
        grid.appendChild(square);
        squares.push(square);
    }
}

createGrid();

// Adiciona a cobrinha no grid
currentSnake.forEach(index => squares[index].classList.add('snake'));

function move() {
    // Remove a "cauda" da cobrinha
    const tail = currentSnake.pop();
    squares[tail].classList.remove('snake');

    // Adiciona uma nova "cabeça" na direção do movimento
    const newHead = currentSnake[0] + direction;
    currentSnake.unshift(newHead);
    squares[newHead].classList.add('snake');
}

setInterval(move, 1000); // Move a cobrinha a cada 1 segundo