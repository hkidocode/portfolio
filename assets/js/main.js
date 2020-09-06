// select navbar
const navbar = document.querySelector('.navbar');
// resize navbar when you scroll
window.addEventListener('scroll', () => {
    navbar.classList.toggle('sticky', window.scrollY > 0);
});

// select navbar items
const navbarItems = Array.from(document.querySelectorAll('.nav__item a'));
// change the color of navbar items when is clicked
navbarItems.forEach(item => {
    item.addEventListener('click', function () {
        navbar.querySelector('.active').classList.remove('active');
        this.classList.add('active');
    }); 
});
