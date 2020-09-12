/* =======================================================================
+++++++++++++++++++++++++  MODAL  ++++++++++++++++++++++++++++++++++++++++
======================================================================= */


// select all elements to applied modal
const quickView = document.querySelector('.btn-wrap__view');
const modal = document.querySelector('.modal');
const closeView = document.querySelector('#about-view');
const modalWindow = window;


const showModal = () => {
    modal.style.display = 'block';
}

// show modal if quick view button is clicked
quickView.addEventListener('click', showModal);


// hide modal if times button is clicked
const hideModal = () => {
    modal.style.display = 'none';
}
closeView.addEventListener('click', hideModal);
closeMessage.addEventListener('click', hideModal);

// hide modal if his outside is clicked
const outsideModal = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
modalWindow.addEventListener('click', outsideModal);

