// JavaScript to handle the login button functionality

function redirectToMain() {
    window.location.href = 'platform.html'; // Redirect to the platform page
}

document.getElementById('login-btn').addEventListener('click', function(e) {
    // Prevent form submission (if there was a form element)
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Please enter both username and password.');
    } else {
        // Simulate login success and redirect to the platform page
        redirectToMain();
    }
});
