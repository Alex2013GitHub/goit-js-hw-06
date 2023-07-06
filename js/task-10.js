const inputControlsContainer = document.getElementById('controls');
const createBtn = inputControlsContainer.querySelector('button[data-create]');
const destroyBtn = inputControlsContainer.querySelector('button[data-destroy]');
const boxesContainer = document.getElementById('boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = +inputControlsContainer.querySelector('input').value;
  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const boxItem = document.createElement('div');
    const size = 30 + i * 10;
    const bgColor = getRandomHexColor();

    boxItem.style.width = `${size}px`;
    boxItem.style.height = `${size}px`;
    boxItem.style.backgroundColor = bgColor;

    boxes.push(boxItem);
  }
  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
