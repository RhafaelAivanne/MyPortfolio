const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const genderInput = document.getElementById('gender');
const codeInput = document.getElementById('code');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    validateName();
    validateEmail();
    validatePhone();
    validateGender();
    validateCode();
}

function validateName() {
    const name = nameInput.value.trim();
    const errorMessage = nameInput.nextElementSibling;

    if (name === '') {
        errorMessage.textContent = 'Name is required';
    } else {
        errorMessage.textContent = '';
    }
}

function validateEmail() {
    const email = emailInput.value.trim();
    const errorMessage = emailInput.nextElementSibling;

    if (email === '') {
        errorMessage.textContent = 'Email is required';
    } else if (!isValidEmail(email)) {
        errorMessage.textContent = 'Invalid email format';
    } else {
        errorMessage.textContent = '';
    }
}

function validatePhone() {
    const phone = phoneInput.value.trim();
    const errorMessage = phoneInput.nextElementSibling;

    if (phone === '') {
        errorMessage.textContent = 'Phone number is required';
    } else if (!isValidPhone(phone)) {
        errorMessage.textContent = 'Invalid phone number format';
    } else {
        errorMessage.textContent = '';
    }
}

function validateGender() {
    const gender = genderInput.value;
    const errorMessage = genderInput.nextElementSibling;

    if (gender === '') {
        errorMessage.textContent = 'Gender is required';
    } else {
        errorMessage.textContent = '';
    }
}

function validateCode() {
    const code = codeInput.value.trim();
    const errorMessage = codeInput.nextElementSibling;

    if (code === '') {
        errorMessage.textContent = 'Code is required';
    } else {
        errorMessage.textContent = '';
    }
}

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function isValidPhone(phone) {
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phone);
}