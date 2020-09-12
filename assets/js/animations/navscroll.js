/* =======================================================================
+++++++++++++++++++++++++  NAVBAR SCROLL  ++++++++++++++++++++++++++++++++
======================================================================= */

// select navbar
const navbar = document.querySelector('.navbar');
const navWindow = window;
// resize navbar when you scroll
window.addEventListener('scroll', () => {
    navbar.classList.toggle('sticky', navWindow.scrollY > 0);
});

// select navbar items
const navbarItems = document.querySelectorAll('.nav__item a');
// change the color of navbar links when is clicked
navbarItems.forEach(item => {
    item.addEventListener('click', function () {
        navbar.querySelector('.active').classList.remove('active');
        this.classList.add('active');
    }); 
});