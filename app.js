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


const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
