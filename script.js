const board = document.querySelector(".board");
const sizeBtn = document.querySelector(".sizeBtn");
const rainbowBtn = document.querySelector(".rainbowBtn");
const shadeBtn = document.querySelector(".shadeBtn")
const penColor = document.querySelector(".penColor")
const BOARD_SIZE = 660;
let boxSize = BOARD_SIZE / 16;
let isRainbow = false;
let isShade = false;

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
      if (isRainbow === true) {
        box.style.backgroundColor = `rgb(${random()},${random()},${random()})`;
      } else if (isShade === true) {
        let currentOpacity = box.dataset.opacity ? parseFloat(box.dataset.opacity) : 0;
        if (currentOpacity < 1) {
          currentOpacity += 0.1;
          currentOpacity = Math.min(currentOpacity, 1); // cap at 1
          box.dataset.opacity = currentOpacity;
        }
        box.style.backgroundColor = `rgba(165, 165, 165, ${currentOpacity})`;
      } else {
        box.style.backgroundColor = penColor.value;
      }
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

//Switch rainbow on/off
rainbowBtn.addEventListener("click", () => {
  if (isRainbow === false) {
    isRainbow = true;
    isShade = false;
  } else {
    isRainbow = false;
  }
});

// Switch Shade on/off
shadeBtn.addEventListener("click", () => {
  if (isShade === false) {
    isShade = true;
    isRainbow = false;
  } else {
    isShade = false;
  }
});


//Create default grid 16 * 16
changeGridSize(16)



function random() {
  return Math.floor(Math.random() * 255) + 1;
}


// Clear button to reset board retain size
// Erase individually erase board piece by piece