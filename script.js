// Seleção dos elementos
const cells = document.querySelectorAll('.cell');
const turnDisplay = document.getElementById('turn');
const resetButton = document.getElementById('reset');

let currentPlayer = 'X'; // Jogador atual
let gameBoard = ['', '', '', '', '', '', '', '', '']; // Tabuleiro de jogo
let gameOver = false;

// Função para verificar se alguém venceu
const checkWinner = () => {
    const winningCombinations = [
        [0, 1, 2], // Linha 1
        [3, 4, 5], // Linha 2
        [6, 7, 8], // Linha 3
        [0, 3, 6], // Coluna 1
        [1, 4, 7], // Coluna 2
        [2, 5, 8], // Coluna 3
        [0, 4, 8], // Diagonal 1
        [2, 4, 6], // Diagonal 2
    ];

    // Verificando todas as combinações possíveis
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            gameOver = true;
            setTimeout(() => {
                alert(`${currentPlayer} venceu!`);
                resetGame();
            }, 100);
            return;
        }
    }

    // Verificando se o jogo deu empate
    if (!gameBoard.includes('')) {
        setTimeout(() => {
            alert('Empate!');
            resetGame();
        }, 100);
    }
};

// Função para reiniciar o jogo
const resetGame = () => {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameOver = false;
    currentPlayer = 'X';
    turnDisplay.textContent = `Vez do Jogador ${currentPlayer}`;
    cells.forEach(cell => {
        cell.textContent = '';
        cell.style.pointerEvents = 'auto';
    });
};

// Função de clique nas células
const handleCellClick = (e) => {
    const index = e.target.dataset.index;
    
    if (gameBoard[index] || gameOver) return; // Verifica se a célula já foi clicada ou se o jogo acabou

    gameBoard[index] = currentPlayer;
    e.target.textContent = currentPlayer;

    checkWinner();

    // Alterna o jogador
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    turnDisplay.textContent = `Vez do Jogador ${currentPlayer}`;
};

// Adicionando evento de clique nas células
cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

// Reiniciar o jogo ao clicar no botão de reset
resetButton.addEventListener('click', resetGame);
