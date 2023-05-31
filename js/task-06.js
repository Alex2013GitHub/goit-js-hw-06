const inputElement = document.querySelector('#validation-input');

inputElement.addEventListener('blur', onImputBlur);

function onImputBlur(event) {
  const inputValue = event.target.value;
  const dataLength = event.target.getAttribute('data-length');

  if (inputValue.length === Number(dataLength)) {
    inputElement.classList.remove('invalid');
    inputElement.classList.add('valid');
  } else {
    inputElement.classList.remove('valid');
    inputElement.classList.add('invalid');
  }
}
