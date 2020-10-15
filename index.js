const { hash } = window.location;


const message = atob(hash.replace('#', ''));

if (message) {
  document.querySelector('#message-form').classList.add('hide');
  document.querySelector('#message-show').classList.remove('hide');

  document.querySelector('h1').innerHTML = message;
}

const linkInput = document.querySelector('#link-input');
document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();

  document.querySelector('#message-form').classList.add('hide');
  document.querySelector('#link-form').classList.remove('hide');

  const input = document.querySelector('#message-input');
  const encrypted = btoa(input.value);


  linkInput.value = `${window.location}#${encrypted}`;
  console.log(linkInput.value);
});

const copyBotton = document.querySelector('.btn-copy');
copyBotton.addEventListener('click', () => {
  copyValueInput();
});  

function copyValueInput() {
  // Select the text field
  linkInput.select();
  linkInput.setSelectionRange(0, 99999);

  // Copy the text inside the text field
  document.execCommand('copy');
}
