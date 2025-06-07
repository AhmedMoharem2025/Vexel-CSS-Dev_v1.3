let modal_box = document.querySelector('modal');
let modal_btn = document.querySelector('.open-modal');
let modal_close_btn = document.querySelector('modal-close-btn');
let modal_close_btn2 = document.getElementById('close-btn');
let modal_save_btn = document.getElementById('save-btn');

modal_btn.addEventListener('click', () => {
   modal_box.classList.add('show-modal');
})


modal_close_btn.addEventListener('click', () => {
   modal_box.classList.remove('show-modal');
})
modal_close_btn2.addEventListener('click', () => {
   modal_box.classList.remove('show-modal');
})

modal_save_btn.addEventListener('click', () => {
   modal_box.classList.remove('show-modal');
})