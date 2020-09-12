// select signin and signup buttons
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
// select the container
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
