// JavaScript to handle the login button functionality

function redirectToMain() {
    window.location.href = 'index.html'; // Redirect to the main site
}

// Optional: If you want to add some interactivity or form validation
document.getElementById('login-btn').addEventListener('click', function(e) {
    // Prevent form submission (if you had a form element)
    e.preventDefault();

    // Optional: Here you could add form validation or other logic
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Please enter both username and password.');
    } else {
        // Simulate login success and redirect to the main page
        redirectToMain();
    }
});
