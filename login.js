// JavaScript to handle the login button functionality

function redirectToMain() {
    window.location.href = 'platform.html'; // Redirect to the platform page
}

// Attach event listener to the login button
document.getElementById('login-btn').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent any default form submission behavior
    redirectToMain(); // Directly redirect to the main page
});
