const products = [
    { id: 1, tittle: 'Notebook', price: 2000 },
    { id: 2, tittle: 'Mouse', price: 400 },
    { id: 3, tittle: 'Keyboard', price: 300 },
    { id: 4, tittle: 'Gamepad', price: 205 },
    { id: 5, tittle: 'Sputnik-V', price: 1 },
    { id: 6, tittle: 'IceBaby', price: 5000 },
];

const renderProduct = (prod) => {
    return `<li class="product-card">
    <div class="product-card__image-wrapper">
        <img src="./img/prod-${prod.id}.png" alt="pic-${prod.id}">
        <button class="product-card__button" type="button">
            <img src="./img/basket.svg" alt="basket">
            Add to chart
        </button>
    </div>
    <div class="product-card__description">
        <h3 class="product-card__tittle">${prod.tittle}</h3>
        <p class="product-card__subtittle">Known for her sculptural takes on traditional tailoring,
            Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
        <p class="product-card__price">$${prod.price}</p>
    </div>
</li>`;
}

const renderPage = (list) => {
    const productList = list.map(item => renderProduct(item));
    document.querySelector('.product__list').innerHTML = productList.join('');
}

renderPage(products);