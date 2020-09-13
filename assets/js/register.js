import * as Functions from './validate.js';
// Select the container of signin and signup forms
const container = document.getElementById('container');
// Select signin and signup overlays buttons
const signUpOverlay = document.getElementById('signUp');
const signInOverlay = document.getElementById('signIn');

signUpOverlay.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInOverlay.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

// Select signup form
const signupForm = container.querySelector('.signup');
const nameSignup = signupForm.querySelector('.name');
const emailSignup = signupForm.querySelector('.email');
const passwordSignup = signupForm.querySelector('.password');

signupForm.addEventListener('submit', (event) => {

	let isOrAreNotValid = (
		(nameSignup.value.length === 0) || (emailSignup.value.length === 0) ||
		(passwordSignup.value.length === 0)
	)
		|| (
			((nameSignup.value.length === 0) && (emailSignup.value.length === 0) &&
				(passwordSignup.value.length === 0))
		);



	if (isOrAreNotValid) {
		event.preventDefault();
		Functions.isValidName(nameSignup);
		Functions.isValidEmail(emailSignup);
		Functions.isValidPassword(passwordSignup);
	} else {
		Functions.isValidName(nameSignup);
		Functions.isValidEmail(emailSignup);
		Functions.isValidPassword(passwordSignup);
	}
});










