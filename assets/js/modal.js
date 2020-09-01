// select all elements we need to show and hide modal
const quickView = document.querySelector('.btn-wrap__view');
const modal = document.querySelector('.modal');
const timesButton = document.querySelector('.fa-times');


// show modal if quick view button is clicked
const showModal = () => {
    modal.style.display = 'block';
}
quickView.addEventListener('click', showModal);


// hide modal if times button is clicked
const hideModal = () => {
    modal.style.display = 'none';
}
timesButton.addEventListener('click', hideModal);

// hide modal if window is clicked
const outsideModal = (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}
window.addEventListener('click', outsideModal);

