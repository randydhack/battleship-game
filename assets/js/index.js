import Board from "./board.js";

let board = new Board(); // creates a new game board

// Examine the grid of the game board in the browser console.
// Create the UI of the game using HTML elements based on this grid.
console.log(board.grid);

const createGridContainer = () => {
  const gridContainer = document.createElement("div");
  gridContainer.id = "container";
  document.body.appendChild(gridContainer);

  const createSquares = () => {
    for (let i = 0; i < board.grid.length; i++) {
      let row = board.grid[i];
      let htmlRow = document.createElement("div");
      htmlRow.className = "row";
      htmlRow.id = i;
      gridContainer.appendChild(htmlRow);

      for (let j = 0; j < row.length; j++) {
        const square = document.createElement("div");
        htmlRow.appendChild(square);
        square.dataset.row = i;
        square.dataset.col = j;
        square.className = "square";

        square.addEventListener("click", (e) => {
            board.makeHit(i,j)
            clickSquare(e)
            console.log(board.numRemaining)

            if (board.isGameOver()) {
                alert('Game Over')
            }
        });
      }
    }
  };
  createSquares();
};

const clickSquare = (event) => {
  const row = event.target.dataset.row;
  const col = event.target.dataset.col;

  const checkSquare = board.grid[row][col];

  if (checkSquare) {
    event.target.style.backgroundColor = "green";
    event.target.innerText = checkSquare;
  } else {
    event.target.style.backgroundColor = "red";
  }
};

const createResetButton = () => {
    const resetButton = document.createElement('button')
    resetButton.id = 'reset'
    document.body.appendChild(resetButton)
    resetButton.innerText = 'Reset Game'

    resetButton.addEventListener('click', () => {

        const container = document.querySelector('#container')
        container.remove()
        const newBoard = new Board()

        board.grid = newBoard.grid
        createGridContainer()
        console.log(board.grid)

    })
}

window.addEventListener("DOMContentLoaded", () => {

    createResetButton();
    createGridContainer();

});
