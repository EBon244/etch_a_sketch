const board = document.querySelector(".board");
const sizeBtn = document.querySelector(".size");
let boxSize = 660 / 16;


for (let i = 0; i < 16 * 16; i++) {
  const box = document.createElement("div");
  box.classList.add('box');
  box.style.width = `${boxSize}px`;
  box.style.height = `${boxSize}px`;

  board.appendChild(box);

  box.addEventListener('mouseover', () => {
    box.style.backgroundColor = "black";
  })
}


// Create a new board
sizeBtn.addEventListener("click", () => {
  const input = prompt('Choose board size: 1-100');
  const num = Number(input);

  if (!Number.isInteger(num) || num < 1 || num > 100) {
    alert('Error: Value must be an Integer between 1-100!');
    return;
  }

  boardSize(num);
});


function boardSize(num) {
  board.textContent = "";

  for (i = 0; i < num * num; i++) {
    const box = document.createElement("div");
    box.classList.add('box');
    boxSize = 660 / num;

    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;

    board.appendChild(box);

    box.addEventListener('mouseover', () => {
      box.style.backgroundColor = "black";
    })
  }
}