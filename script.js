const boardSize = 15;
let board = Array.from({ length: boardSize }, () => Array(boardSize).fill(0));
let currentPlayer = 1;

function initBoard() {
  const boardElement = document.getElementById('board');
  boardElement.innerHTML = '';
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.row = i;
      cell.dataset.col = j;
      cell.addEventListener('click', handleCellClick);
      boardElement.appendChild(cell);
    }
  }
}

function handleCellClick(event) {
  const row = parseInt(event.target.dataset.row);
  const col = parseInt(event.target.dataset.col);
  if (board[row][col] === 0) {
    board[row][col] = currentPlayer;
    event.target.classList.add(currentPlayer === 1 ? 'black' : 'white');
    if (checkWin(row, col)) {
      alert(`Player ${currentPlayer} wins!`);
      resetGame();
    } else {
      currentPlayer = 3 - currentPlayer;
      if (currentPlayer === 2) {
        makeAIMove();
      }
    }
  }
}

function checkWin(row, col) {
  // Win checking logic to be implemented
  return false;
}

function resetGame() {
  board = Array.from({ length: boardSize }, () => Array(boardSize).fill(0));
  initBoard();
  currentPlayer = 1;
}

document.getElementById('new-game').addEventListener('click', resetGame);

initBoard();