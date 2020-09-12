/* =======================================================================
+++++++++++++++++++++++++  CARASOUL  +++++++++++++++++++++++++++++++++++++
======================================================================= */

// select all elements we need to control the carasoul
const track = document.querySelector('.carasoul__track');
const slides = Array.from(track.children);
const prevButton = document.querySelector('.carasoul__previous');
const nextButton = document.querySelector('.carasoul__next');
const dotsNav = document.querySelector('.mentors__nav');
const dots = Array.from(dotsNav.children);

// get the width of the first slide
const slideWidth = slides[0].getBoundingClientRect().width;

// arrange the slides next to one another dynamically
const setSlidePosition = (slide, index) => {
    slide.style.left = `${slideWidth * index}px`;
};

slides.forEach(setSlidePosition);

// move slide to right or left
const moveSlide = (track, currentSlide, targetedSlide) => {
    //translate the carasoul track to show the targeted slide
    track.style.transform = `translateX(-${targetedSlide.style.left})`;
    // remove the current-slide class in current slide and add it to the targeted slide
    currentSlide.classList.remove('current-slide');
    targetedSlide.classList.add('current-slide');
}

// remove the current-slide class in current dot and add it to the targeted dot
const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

// hide or show arrow buttons
const showHideArrow = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');

    } else if (targetIndex === (slides.length - 1)) {
        nextButton.classList.add('is-hidden');
        prevDot.classList.remove('is-hidden');
    } else {
        nextButton.classList.remove('is-hidden');
        prevButton.classList.remove('is-hidden');
    }
}

// when I click previous button, move slides to right
prevButton.addEventListener('click', () => {
    // select the current slide
    const currentSlide = track.querySelector('.current-slide');
    // select previous element sibling of current slide
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    showHideArrow(slides, prevButton, nextButton, prevIndex);
});

// when I click next button, move slides to left
nextButton.addEventListener('click', () => {
    // select the current slide
    const currentSlide = track.querySelector('.current-slide');
    // select next element sibling of current slide
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    showHideArrow(slides, prevButton, nextButton, nextIndex);
});

// when I click the nav indicators, move to that slide

dotsNav.addEventListener('click', (event) => {
    // what indicator was clicked on
    const targetDot = event.target.closest('button');
    // close the function if the user click in dots nav parent
    if (!targetDot) { return; }
    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    // find index of dot button
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    showHideArrow(slides, prevButton, nextButton, targetIndex);

});

/* =======================================================================
+++++++++++++++++++++++++  FILTER  +++++++++++++++++++++++++++++++++++++++
======================================================================= */

// select project filter nav
const projectsNav = document.querySelector('.work-type');
// select project filter buttons
const filterButtons = Array.from(projectsNav.children);
// select project items
const projectItems = Array.from(document.querySelectorAll('.work-projects__item'));

filterButtons.forEach(button => {
    button.addEventListener('click', function () {
        // change background color when nav button clicked
        projectsNav.querySelector('.active').classList.remove('active');
        this.classList.add('active');

        const filterValue = this.getAttribute('data-filter');
        // hide or show item based on data target is eqaul data category
        projectItems.forEach((item) => {
            if((filterValue === item.getAttribute('data-category')) || (filterValue === 'all')) {
                item.classList.remove('hide');
                item.classList.add('show');
            }
            else {
                item.classList.add('hide');
                item.classList.remove('show');
            }
        });
    })
});

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