const open = document.querySelector('.open-menu');
const close = document.querySelector('.close-menu');
const menu = document.querySelector('.mobile-menu');
const link = document.querySelectorAll('.mobile-link');

function hideMenu() {
  menu.style.display = 'none';
  document.body.style.overflow = 'auto';
}

open.addEventListener('click', () => {
  menu.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

close.addEventListener('click', () => {
  hideMenu();
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    hideMenu();
  });
});

const form = document.getElementById('myForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const emailInput = document.querySelector('.input-email');
  const email = emailInput.value;
  const suggestedEmail = email.toLowerCase();

  const myStorage = {
    name: document.getElementById('name').value,
    email: document.querySelector('.input-email').value,
    message: document.getElementById('message').value,
  };

  if (email === suggestEmail) {
    localStorage.setItem('myStorage', JSON.stringify(myStorage));
    form.submit();
  } else {
    const errorMessage = document.querySelector('.errors');
    errorMessage.textContent = `Your form is not sent, please enter your email in lowercase, e.g. XXXXX`;
    errorMessage.style.display = 'block';
  }
});

window.addEventListener('load', (e) => {
  e.preventDefault();
  const storageObject = JSON.parse(localStorage.getItem('myStorage'));
  if (storageObject) {
    document.getElementById('name').value = storageObject.name;
    document.querySelector('.input-email').value = storageObject.email;
    document.getElementById('message').value = storageObject.message;
  }
});
