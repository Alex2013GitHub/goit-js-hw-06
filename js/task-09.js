function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  bodyEl: document.querySelector('body'),
  buttonEl: document.querySelector('.change-color'),
  bgColorEl: document.querySelector('.color'),
};

refs.buttonEl.addEventListener('click', onChangeColor);

function onChangeColor() {
  const onHexChangeColor = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = onHexChangeColor;
  refs.bgColorEl.textContent = onHexChangeColor;
}
