let drop_heading = document.querySelector('.drop-heading');
let drop_down = document.querySelector('Drop-down');
let li_dropdown = document.querySelectorAll('Drop-down ul li');

drop_heading.addEventListener('click', () => {
    drop_down.classList.toggle('show-drop-down');
});

li_dropdown.forEach(lis_dropdown => {
    lis_dropdown.addEventListener('click', () => {
        drop_heading.textContent = lis_dropdown.textContent;
        drop_down.classList.remove('show-drop-down');
    });
});