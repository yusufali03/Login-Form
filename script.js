document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const errorMessage = document.getElementById("error-message");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Replace these values with your actual login logic
    const username = "your_username";
    const password = "your_password";

    const enteredUsername = loginForm.username.value;
    const enteredPassword = loginForm.password.value;

    if (enteredUsername === username && enteredPassword === password) {
      // Successful login
      window.location.href = "welcome.html"; // Redirect to a welcome page
    } else {
      errorMessage.textContent =
        "Invalid username or password. Please try again.";
    }
  });
});
