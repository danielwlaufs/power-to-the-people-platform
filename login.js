// JavaScript to handle the login button functionality

function redirectToMain() {
    window.location.href = 'platform.html'; // Redirect to the platform page
}

document.getElementById('login-btn').addEventListener('click', function(e) {
    // Prevent form submission (if there was a form element)
    e.preventDefault();

    // Directly call the redirection function without any conditions
    redirectToMain();
});
