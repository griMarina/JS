'use strict'

const $cart = document.querySelector('.cart');
const $catalog = document.querySelector('.catalog');

let cart = [];
let catalog = [];

function Item(title, img, desc, price, id) {
    this.title = title;
    this.img = img;
    this.desc = desc;
    this.price = price;
    this.id = id;
}

function ItemCart({ title, price, quantity = 1, id }) {
    this.title = title;
    this.price = price;
    this.quantity = quantity;
    this.id = id;
}

function countQuantity(array) { // подсчет количества товаров в корзине
    let sum = 0;
    for (let item of array) {
        sum += item.quantity;
    }
    return sum;
}

function countCartPrice(array) { // подсчет общей cтоимости корзины
    let sum = 0;
    for (let item of array) {
        sum += (item.price * item.quantity);
    }
    return sum;
}

function createCatalog(array) { // создание каталога с карточками
    for (let item of array) {
        createItemCard(item);
    }
}

function createItemCard({ title, img, desc, price, id }) { // создание карточки товара
    const itemHtml = `<div class="item-card ">
    <h2 class="item-card__title ">${title}</h2>
    <img src="${img}" alt="image" class="item-card__img ">
    <p class="item-card__desc">${desc}</p>
    <p class="item-card__price">${price} руб.</p>
    <button data-id="${id}" class="item-card__btn">Add to Cart</button>
    </div>`;
    $catalog.insertAdjacentHTML('beforeend', itemHtml);
}

function createCartText() { // текст корзины
    if (countQuantity(cart) > 0) {
        $cart.textContent = `В корзине ${countQuantity(cart)} товаров на сумму ${countCartPrice(cart)} рублей`;
    } else {
        $cart.textContent = 'Корзина пуста';
    };
}

catalog = [
    new Item('Rucksack', 'img/item-1.jpg', 'Item description', 1000, 0),
    new Item('Suit', 'img/item-2.jpg', 'Item description', 3000, 1),
    new Item('Jacket', 'img/item-3.jpg', 'Item description', 4000, 2),
    new Item('Trousers', 'img/item-4.jpg', 'Item description', 2000, 3),
    new Item('Jacket', 'img/item-5.jpg', 'Item description', 1500, 4),
    new Item('Shirt', 'img/item-6.jpg', 'Item description', 1200, 5)
];

createCatalog(catalog);
createCartText();

// добавление товара в корзину
$catalog.addEventListener('click', function (event) {
    if (event.target.className === 'item-card__btn') {
        let dataId = Number(event.target.getAttribute('data-id'));
        cart.push(new ItemCart(catalog[dataId]));
    }
    createCartText();
})