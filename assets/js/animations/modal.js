
// select all elements to applied modal
const quickView = document.querySelector('.btn-wrap__view');
const modal = document.querySelector('.modal');
const closeMessage = document.querySelector('#about-view');


const showModal = () => {
    modal.style.display = 'block';
}

// show modal if quick view button is clicked
quickView.addEventListener('click', showModal);


// hide modal if times button is clicked
const hideModal = () => {
    modal.style.display = 'none';
}
closeMessage.addEventListener('click', hideModal);

// hide modal if his outside is clicked
const outsideModal = (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}
window.addEventListener('click', outsideModal);

