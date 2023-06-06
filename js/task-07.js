const inputControl = document.getElementById('font-size-control');
const inputTextControl = document.getElementById('text');

inputControl.addEventListener('input', onInputControl);

function onInputControl() {
  const onFontSize = inputControl.value + 'px';
  inputTextControl.style.fontSize = onFontSize;
}
