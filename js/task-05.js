const userName = document.querySelector('#name-input');
const userNameOutput = document.querySelector('#name-output');

userName.addEventListener('input', onInput);

function onInput(event) {
  userNameOutput.textContent =
    event.currentTarget.value === '' ? 'Anonymous' : event.currentTarget.value;
}
