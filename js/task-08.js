const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  const data = {
    email: email.value,
    password: password.value,
  };

  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  }

  event.currentTarget.reset();
  console.log(data);
}
