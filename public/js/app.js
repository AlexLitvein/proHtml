const mymenuBttn = document.querySelector('.header__button-menu');
const menu = document.querySelector('.ppmnu');
const bttnClose = document.querySelector('.ppmnu__btn-cls');

mymenuBttn.addEventListener('click', function (e) {
    menu.style.display = 'block';
}, false);

bttnClose.addEventListener('click', function (e) {
    menu.style.display = 'none';
}, false);