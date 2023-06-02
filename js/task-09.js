const hexColorBtn = document.querySelector('.change-color');
const hexColor = document.querySelector('.color');

hexColorBtn.addEventListener('click', onClick);
// hexColorBtn.removeEventListener('click', onClick);
function onClick(evt) {
  hexColor.textContent.innerHTML += getRandomHexColor;
  console.log('hello');
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
console.log(getRandomHexColor());
