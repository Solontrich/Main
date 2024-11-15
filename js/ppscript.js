document.addEventListener('DOMContentLoaded', function() {
    const acceptButton = document.getElementById('accept-btn');
    acceptButton.addEventListener('click', function() {
        alert('You have accepted the Privacy Policy.');
        window.location.href = 'privacy-accepted.html';
    });
});