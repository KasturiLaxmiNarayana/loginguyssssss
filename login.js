function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    // For demonstration purposes, let's assume the correct username and password are 'demo'
    if (username === 'demo' && password === 'demo') {
        // Successful login - redirect or perform desired action
        alert('Login successful! Redirecting...');
        window.location.href = 'dashboard.html'; // Redirect to dashboard page
    } else {
        // Display error message for unsuccessful login
        errorMessage.textContent = 'Invalid username or password. Please try again.';
    }
}
