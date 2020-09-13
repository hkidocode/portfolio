export {isValidName, isValidEmail, isValidPassword, isSetMessage};

// Check full name if contains letters in a-z in lowercase
function isValidName(fullName) {
    const regex = /^[a-zA-Z ]+$/;
    if (regex.test(fullName.value)) {
        setSuccessFor(fullName);
    } else {
        setErrorFor(fullName, "Enter a valid name");
    }
}

// Check email adress
function isValidEmail(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(email.value)) {
        setSuccessFor(email);
    } else {
        setErrorFor(email, "Enter a valid email");
    }
}

// Check password 
function isValidPassword(password) {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,30}$/;
    if (regex.test(password.value)) {
        setSuccessFor(password);
    } else {
        setErrorFor(password,
            `Enter 6 to 30 characters:<br>1.at least one numeric digit<br>2.one uppercase and one lowercase`);
    }
}

// check if the user is write a message or no
function isSetMessage(input) {
    if (input.value !== '') {
        setSuccessFor(input);
    } else {
        setErrorFor(input, "Enter a message");
    }
}

// remove border if match the existing regular expression 
function setSuccessFor(input) {
    input.nextElementSibling.textContent = '';
    input.style.border = '1px solid #635555';
}

// Add styles to input if not exist and not match the existing regular expression 
function setErrorFor(input, message) {
    const smallMessage = input.nextElementSibling;
    smallMessage.innerHTML = message;
    input.style.border = '1.5px solid #FF0033';
    smallMessage.style.color = '#FF0033';
    smallMessage.style.fontSize = '12px';
}