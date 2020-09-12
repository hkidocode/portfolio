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




