// Get the moving background element
const movingBackground = document.querySelector('.moving-background');

// Get the profile container element
const profileContainer = document.querySelector('.profile-container');

// Get the profile header element
const profileHeader = document.querySelector('.profile-header');

// Get the profile picture element
const profilePicture = document.querySelector('.profile-picture');

// Get the profile bio element
const profileBio = document.querySelector('.profile-bio');

// Get the profile social links element
const profileSocialLinks = document.querySelector('.profile-social-links');

// Add an event listener to the moving background element
movingBackground.addEventListener('mouseover', () => {
  // Change the background color of the moving background element
  movingBackground.style.background = 'linear-gradient(-45deg, #FF0000, #FFFF00, #0000FF, #000000, #008000, #FFA500)';
});

// Add an event listener to the profile container element
profileContainer.addEventListener('mouseover', () => {
  // Change the background color of the profile container element
  profileContainer.style.background = 'rgba(255, 255, 255, 0.9)';
});

// Add an event listener to the profile header element
profileHeader.addEventListener('mouseover', () => {
  // Change the text color of the profile header element
  profileHeader.style.color = '#FF0000';
});

// Add an event listener to the profile picture element
profilePicture.addEventListener('mouseover', () => {
  // Change the border color of the profile picture element
  profilePicture.style.border = '5px solid #FFFF00';
});

// Add an event listener to the profile bio element
profileBio.addEventListener('mouseover', () => {
  // Change the text color of the profile bio element
  profileBio.style.color = '#0000FF';
});

// Add an event listener to the profile social links element
profileSocialLinks.addEventListener('mouseover', () => {
  // Change the text color of the profile social links element
  profileSocialLinks.style.color = '#008000';
});

// Use Bootstrap's tooltip plugin
$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
});

// Use Bootstrap's popover plugin
$(document).ready(function() {
  $('[data-toggle="popover"]').popover();
});

// Get the button element
const button = document.querySelector('button');

