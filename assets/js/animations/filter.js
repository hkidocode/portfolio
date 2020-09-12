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
