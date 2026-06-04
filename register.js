document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from refreshing the page
    validateForm();
});

function validateForm() {
    let isValid = true;

    // Clear previous error messages
    clearErrors();

    // Validate Name
    const name = document.getElementById("name").value.trim();
    if (name === "") {
        showError("nameError", "Name is required.");
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById("email").value.trim();
    if (!validateEmail(email)) {
        showError("emailError", "Enter a valid email address.");
        isValid = false;
    }

    // Validate Phone Number
    const phone = document.getElementById("phone").value.trim();
    if (!validatePhone(phone)) {
        showError("phoneError", "Phone number must be 10 digits.");
        isValid = false;
    }

    // Validate Password
    const password = document.getElementById("password").value.trim();
    if (!validatePassword(password)) {
        showError("passwordError", "Password must be at least 6 characters.");
        isValid = false;
    }

    // If valid, show success message
    if (isValid) {
        document.getElementById("successMessage").textContent = "Registration successful!";
        document.getElementById("registrationForm").reset(); // Optionally reset the form
    }
}

function validateEmail(email) {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return emailPattern.test(email);
}

function validatePhone(phone) {
    // Allow numbers with optional country code, spaces, dashes, or parentheses
    const phonePattern = /^\+?\d{1,3}?[-.\s]?(\(?\d{1,4}?\)?[-.\s]?)?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    return phonePattern.test(phone);
}

function validatePassword(password) {
    return password.length >= 6; // Minimum length for password
}

function showError(id, message) {
    document.getElementById(id).textContent = message;
}

function clearErrors() {
    const errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach(element => {
        element.textContent = "";
    });
    document.getElementById("successMessage").textContent = ""; // Clear success message
}

// Focus and Blur events for better UX
document.querySelectorAll("input").forEach(input => {
    input.addEventListener("focus", function() {
        clearErrors();
    });
});