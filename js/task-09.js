function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  bodyEl: document.querySelector('body'),
  btnEl: document.querySelector('.change-color'),
  bgColor: document.querySelector('.color'),
};

refs.btnEl.addEventListener('click', onClick);

function onClick() {
  const onHexChangecolor = getRandomHexColor();
  refs.bgColor.textContent = onHexChangecolor;
  refs.bodyEl.style.backgroundColor = onHexChangecolor;
  console.log(onHexChangecolor);
}
