const form = document.querySelector('.contact-form');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  successMessage.textContent = "Message Sent Successfully!"; 
  form.reset(); 
  setTimeout(() => {
    successMessage.textContent = "";
  }, 3000);
});
