const closeButton = document.getElementById('close-submit-popup');
const form = document.getElementById('contact-form');
const popup = document.getElementById('popup');
let userEmail = document.getElementById('form-email');
let userName = document.getElementById('form-name');
let userMessage = document.getElementById('form-message');

closeButton.addEventListener('click', closePopup);

form.addEventListener('submit', openPopup);

function openPopup(event) {
  // Prevent the default form submission
  event.preventDefault();

  // Show the popup
  popup.style.display = 'flex';
}

function closePopup() {
  resetForm();
  popup.style.display = 'none';
}

function resetForm() {
  userEmail.value = '';
  userName.value = '';
  userMessage.value = '';
}
