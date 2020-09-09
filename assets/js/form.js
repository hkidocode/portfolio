// Select all input field in the website
const contactForm = document.querySelector('.contact__form');
const nameContact = document.querySelector('.name-contact');
const emailContact = document.querySelector('.email-contact');
const messageContact = document.querySelector('.message-contact');



// Check full name if contains letters in a-z in lowercase
function isValidFullName(fullName) {
    const regex = /^[a-zA-Z ]+$/;
    if (regex.test(fullName.value)) {
        setSuccessFor(fullName);
    } else {
        setErrorFor(fullName, "Enter a valid full name");
    }
}

// Check email adress
function isValidEmail(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(email.value)) {
        setSuccessFor(email);
    } else {
        setErrorFor(email, "Enter a valid email adress");
    }
}

// // Check password 
// function isValidPassword(password) {
//     const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,30}$/;
//     if (regex.test(password.value)) {
//         setSuccessFor(password);
//     } else {
//         setErrorFor(password,
//             "Enter 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter",
//             2);
//     }
// }

// // check if the passwords are matched
// function matchPassword(password, confirmPassword) {
//     if (password.value === confirmPassword.value) {
//         setSuccessFor(password);
//         setSuccessFor(confirmPassword);
//     } else {
//         setErrorFor(password, "Password confirmation doesn\'t match");
//         setErrorFor(confirmPassword, "Password confirmation doesn't match");
//     }
// }

// check if the user is write a message or no
function isSetMessage(input) {
    if(input.value !== '') {
        setSuccessFor(input);
    } else {
        setErrorFor(input, "Enter a message");
    }
}


// Add border color to input if exist and match the existing regular expression 
function setSuccessFor(input) {
    input.nextElementSibling.textContent = '';
    input.style.border = '1.5px solid #2ECC71';
}

// Add styles to input if not exist and not match the existing regular expression 
function setErrorFor(input, message) {
    const smallMessage = input.nextElementSibling;
    smallMessage.textContent = message;
    input.style.border = '1.5px solid #FF0033';
    smallMessage.style.color = '#FF0033';
    smallMessage.style.padding = '8px 8px 0px';
    smallMessage.style.fontSize = '16px';
}

// function insertDataToDB() {
//     let xhr = new XMLHttpRequest();
//     xhr.open("POST", "inc/connection.php", true);
//     xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//     xhr.onload = function () {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             console.log(this.responseText);
//         }
//     }
//     xhr.send("fullName=" + fullName + "&email=" + email + "&password=" + password);
// }


contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // matchPassword(password, confirmPassword);
    isValidFullName(nameContact);
    isValidEmail(emailContact);
    isSetMessage(messageContact);
    // isValidPassword(password);
    // insertDataToDB();


});