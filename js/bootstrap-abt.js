// Navbar toggle
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

navbarToggler.addEventListener('click', () => {
  navbarCollapse.classList.toggle('show');
});

// Email subscription form
const subscriptionForm = document.getElementById('subscription-form');

subscriptionForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  console.log(`Subscribed: ${email}`);
  // Add your email subscription logic here
});