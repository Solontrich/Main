document.addEventListener('DOMContentLoaded', function() {
    const acceptButton = document.getElementById('accept-btn');
    acceptButton.addEventListener('click', function() {
        alert('You have accepted the Terms and Conditions.');
        window.location.href = 'terms-accepted.html';
    });
});