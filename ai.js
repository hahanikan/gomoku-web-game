function makeAIMove() {
  const difficulty = parseInt(document.getElementById('difficulty').value);
  let move;
  switch (difficulty) {
    case 1:
      move = getRandomMove();
      break;
    case 2:
      move = getDefensiveMove();
      break;
    case 3:
      move = getBasicStrategyMove();
      break;
    case 4:
      move = getAdvancedMove();
      break;
    case 5:
      move = getExpertMove();
      break;
  }
  if (move) {
    const cell = document.querySelector(`[data-row='${move.row}'][data-col='${move.col}']`);
    cell.click();
  }
}

function getRandomMove() {
  // Random move implementation
}

function getDefensiveMove() {
  // Basic defensive move implementation
}

function getBasicStrategyMove() {
  // Basic strategy implementation
}

function getAdvancedMove() {
  // Advanced strategy implementation
}

function getExpertMove() {
  // Expert strategy implementation
}