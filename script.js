function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Add your authentication logic here
    if (username === "yourUsername" && password === "yourPassword") {
        // Successful login, allow the form submission
        return true;
    } else {
        // Failed login, show error message and prevent form submission
        document.getElementById("error-message").style.display = "block";
        return false;
    }
}

function togglePassword() {
    var passwordInput = document.getElementById("password");
    var showPasswordCheckbox = document.getElementById("showPassword");

    // Toggle the password visibility
    passwordInput.type = showPasswordCheckbox.checked ? "text" : "password";
}
