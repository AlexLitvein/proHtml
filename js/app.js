// const prods = document.querySelectorAll('.product__item-image-wrapper');
// prods.forEach(function (prod) {
//     prod.addEventListener('mouseenter', function (e) {
//         const buttn = e.target.querySelector('.product__item-button');
//         const img = e.target.querySelector('.product__item-image');
//         buttn.style.display = 'flex';
//         img.style.opacity = '0.5';
//     }, false);

//     prod.addEventListener('mouseleave', function (e) {
//         const buttn = e.target.querySelector('.product__item-button');
//         const img = e.target.querySelector('.product__item-image');
//         buttn.style.display = 'none';
//         img.style.opacity = '1.0';
//     }, false);
// });

const menuBttn = document.querySelector('.header__button-menu');
const menu = document.querySelector('.ppmnu');
const bttnClose = document.querySelector('.ppmnu__btn-cls');

menuBttn.addEventListener('click', function (e) {
    menu.style.display = 'block';
}, false);

bttnClose.addEventListener('click', function (e) {
    menu.style.display = 'none';
}, false);