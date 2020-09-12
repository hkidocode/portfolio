import * as Functions from './validate.js';

// Select all input field in contact form
const contactForm = document.querySelector('.contact__form');
const nameContact = document.querySelector('.name-contact');
const emailContact = document.querySelector('.email-contact');
const messageContact = document.querySelector('.message-contact');

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



contactForm.addEventListener('submit', (event) => {

    let isOrAreNotValid = ((nameContact.value.length === 0) ||
                        (emailContact.value.length === 0) ||
                        (messageContact.value.length === 0)) ||
                         (((nameContact.value.length === 0) &&
                         (emailContact.value.length === 0) &&
                         (messageContact.value.length === 0)))



    if (isOrAreNotValid) {
        event.preventDefault();
        Functions.isValidName(nameContact);
        Functions.isValidEmail(emailContact);
        Functions.isSetMessage(messageContact);
    } else {
        Functions.isValidName(nameContact);
        Functions.isValidEmail(emailContact);
        Functions.isSetMessage(messageContact);
    }
});



