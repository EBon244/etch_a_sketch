const board = document.querySelector(".board");


for (i = 0; i < 16 * 16; i++) {
  const box = document.createElement("div");
  box.classList.add('box');

  board.appendChild(box);

  box.addEventListener('mouseover', () => {
    box.style.backgroundColor = "black";
  })
}
