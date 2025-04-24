const board = document.querySelector(".board");
const sizeBtn = document.querySelector(".size");
const BOARD_SIZE = 660;
let boxSize = BOARD_SIZE / 16;

// Creates a Board
function changeGridSize(gridSize) {
  board.textContent = "";

  for (let i = 0; i < gridSize * gridSize; i++) {
    const box = document.createElement("div");
    box.classList.add('box');
    boxSize = BOARD_SIZE / gridSize;

    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;

    board.appendChild(box);

    box.addEventListener('mouseover', () => {
      box.style.backgroundColor = "black";
    })
  }
}

// Prompt user for grid size
sizeBtn.addEventListener("click", () => {
  const input = prompt('Choose board size: 1-100');
  const gridSize = Number(input);

  if (!Number.isInteger(gridSize) || gridSize < 1 || gridSize > 100) {
    alert('Error: Value must be an Integer between 1-100!');
    return;
  }

  changeGridSize(gridSize);
});

//Create default grid 16 * 16
changeGridSize(16)

//TODO create a random rainbow trail
//Opacity increase of 10%
//Let user choose specific color