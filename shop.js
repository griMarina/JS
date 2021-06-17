'use strict'

const $cart = document.querySelector('.cart');
const $catalog = document.querySelector('.catalog');

let cart = [];
let catalog = [];

function getID() {
    let count = 1;
    return function () {
        return count++;
    }
}

let idItem = getID();
let idItemCart = getID();


function Item(title, img, desc, price) {
    this.title = title,
        this.img = img,
        this.desc = desc,
        this.price = price,
        this.id = idItem();
}

function ItemCart(title, price, quantity) {
    this.title = title,
        this.price = price,
        this.quantity = quantity,
        this.id = idItemCart();
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
    const itemHtml = `<div class="card">
    <h2 class="card__title">${title}</h2>
    <img src="${img}" alt="image" class="card__img">
    <p class="card__desc">${desc}</p>
    <p class="card__price">${price} руб.</p>
    <button data-id="${id}" class="card__btn">Add to Cart</button>
    </div>`;
    $catalog.insertAdjacentHTML('beforeend', itemHtml);
}

// function createCatalog(array) { // создание каталога с карточками
//     for (let item of array) {

//     }
// }

const cartArr = [
    new ItemCart('Rucksack', 1000, 1),
    new ItemCart('Suit', 3000, 1),
    new ItemCart('Jacket', 4000, 1),
    new ItemCart('Trousers', 2000, 1),
    new ItemCart('Jacket', 1500, 1),
    new ItemCart('Shirt', 1200, 1)
];
console.log(cartArr);

catalog = [
    new Item('Rucksack', 'img/item-1.jpg', 'Item description', 1000),
    new Item('Suit', 'img/item-2.jpg', 'Item description', 3000),
    new Item('Jacket', 'img/item-3.jpg', 'Item description', 4000),
    new Item('Trousers', 'img/item-4.jpg', 'Item description', 2000),
    new Item('Jacket', 'img/item-5.jpg', 'Item description', 1500),
    new Item('Shirt', 'img/item-6.jpg', 'Item description', 1200)
];
console.log(catalog);

// Вывод текста в корзине
if (countQuantity(cart) === 0) {
    $cart.textContent = 'Корзина пуста';
} else {
    $cart.textContent = `В корзине ${countQuantity(cart)} товаров на сумму ${countCartPrice(cart)} рублей`;
};

// вывод товаров из массива каталог
createCatalog(catalog);

// $catalog.addEventListener('click', function () {
//     $cart.appendChild('.card')
// })