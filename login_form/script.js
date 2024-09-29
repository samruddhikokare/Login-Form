$(document).ready(function() {
    // Handle form submission
    $('#loginForm').on('submit', function(event) {
        event.preventDefault();  // Prevent default form submission (reloading page)

        // Get values from the input fields
        const username = $('#username').val();
        const password = $('#password').val();

        // Check if both fields are filled
        if (username === "" || password === "") {
            alert('Please fill out all fields');  // Show an alert if any field is empty
        } else {
            alert('Login successful!');  // Show success message if both fields are filled
        }
    });
});
