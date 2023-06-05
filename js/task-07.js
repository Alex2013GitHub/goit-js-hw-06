const inputEl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');

inputEl.addEventListener('input', onClick);

function onClick() {
  const onFontSize = inputEl.value + 'px';
  textEl.style.fontSize = onFontSize;
}
