// Add event listener on form submit
document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent default form submission

  // Get form values
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let password = document.getElementById("password").value.trim();
  let confirmPassword = document.getElementById("confirmPassword").value.trim();
  let errorMsg = document.getElementById("errorMsg");

  // Validation conditions
  if (name.length < 5) {
    errorMsg.textContent = "Name must be at least 5 characters long";
    return;
  }
  if (!email.includes("@")) {
    errorMsg.textContent = "Enter a valid email";
    return;
  }
  if (phone.length !== 10 || phone === "1234567890" || isNaN(phone)) {
    errorMsg.textContent = "Enter a valid 10-digit phone number";
    return;
  }
  if (password.length < 8 || password.toLowerCase() === "password" || password.toLowerCase() === name.toLowerCase()) {
    errorMsg.textContent = "Password is too weak";
    return;
  }
  if (password !== confirmPassword) {
    errorMsg.textContent = "Passwords do not match";
    return;
  }

  // Success message
  errorMsg.style.color = "green";
  errorMsg.textContent = "Form submitted successfully 🎉";
});
