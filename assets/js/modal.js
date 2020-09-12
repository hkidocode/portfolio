
// select all elements to applied modal
const quickView = document.querySelector('.btn-wrap__view');
const modals = document.querySelectorAll('.modal');
const closeView = document.querySelector('#about-view');


const showModal = () => {
    modals.forEach(modal => {
        modal.style.display = 'block';
    });
}

// show modal if quick view button is clicked
quickView.addEventListener('click', showModal);


// hide modal if times button is clicked
const hideModal = () => {
    modals.forEach(modal => {
        modal.style.display = 'none';
    });
}
closeView.addEventListener('click', hideModal);
closeMessage.addEventListener('click', hideModal);

// hide modal if his outside is clicked
const outsideModal = (e) => {
    modals.forEach(modal => {
        if(e.target == modal) {
            modal.style.display = 'none';
        }
    });
}
window.addEventListener('click', outsideModal);

