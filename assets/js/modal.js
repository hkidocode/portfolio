// // start value of progress bar
// let start = 0;
// // run progress bar until end value reached 
// const frame = () => {
//     start++;
//     if(start === 85) {
//         clearInterval(frame);
//     } else {
//         const counter = document.querySelector('.progress-skill__counter');
//         counter.textContent = `${start}`;
//     }
// }

// const stopPoint = () => {
//     const stop = document.querySelector('.progress-skill__stop');
//     stop.style.display = 'block';
// }

// setInterval(frame, 50);
// setTimeout(stopPoint, 3000)

// select all elements to applied modal
const quickView = document.querySelector('.btn-wrap__view');
const detailsProject = document.querySelector('.z')
const modal = document.querySelector('.modal');
const timesButton = document.querySelector('.fa-times');


const showModal = () => {
    modal.style.display = 'block';
}

// show modal if quick view button is clicked
quickView.addEventListener('click', showModal);


// hide modal if times button is clicked
const hideModal = () => {
    modal.style.display = 'none';
}
timesButton.addEventListener('click', hideModal);

// hide modal if window is clicked
const outsideModal = (e) => {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
}
window.addEventListener('click', outsideModal);