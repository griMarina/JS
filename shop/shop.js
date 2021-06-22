'use strict'

const $cart = document.querySelector('.cart');
const $catalog = document.querySelector('.catalog');
const $popup = document.querySelector('.popup');
const $closePopupBtn = $popup.querySelector('.close-btn');
const $slider = $popup.querySelector('.slider')
const $currentSlide = $popup.querySelector('.current-slide');

let cart = [];
let catalog = [];

function getId() {
    let i = 0;
    return function () {
        return i++;
    }
}

let itemId = getId();
let itemCartId = getId()

function Item(title, img, desc, price) {
    this.title = title;
    this.img = img;
    this.desc = desc;
    this.price = price;
    this.id = itemId();
}

function ItemCart({ title, price, quantity = 1 }) {
    this.title = title;
    this.price = price;
    this.quantity = quantity;
    this.id = itemCartId();
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
        $currentSlide.textContent = 'Корзина пуста'
    };
}

function showPopup() {
    $popup.style.display = 'block';
}

function closePopup() {
    $popup.style.display = 'none';
}

// отрисовка товаров в popup
function createCartSlide() {
    $currentSlide.textContent = '';
    const html = cart.map(function (item, index) {
        return `<div class="cart-slide">
        <div class="cart-slide__itm" id="${index}">${item.title}: ${item.price} руб. количество: ${item.quantity}</div>
        <button data-id="${index}" class="delete-btn">Удалить</button></div>`
    }).join(' ');

    $currentSlide.insertAdjacentHTML('afterbegin', html);
}

$closePopupBtn.addEventListener('click', closePopup);
$cart.addEventListener('click', showPopup);

catalog = [
    new Item('Rucksack', 'img/item-1.jpg', 'Item description', 1000),
    new Item('Suit', 'img/item-2.jpg', 'Item description', 3000),
    new Item('Jacket', 'img/item-3.jpg', 'Item description', 4000),
    new Item('Trousers', 'img/item-4.jpg', 'Item description', 2000),
    new Item('Jacket', 'img/item-5.jpg', 'Item description', 1500),
    new Item('Shirt', 'img/item-6.jpg', 'Item description', 1200)
];

createCatalog(catalog);
createCartText();

// добавление товара в массив корзины
$catalog.addEventListener('click', function (event) {
    if (event.target.className === 'item-card__btn') {
        const dataId = Number(event.target.getAttribute('data-id'));
        cart.push(new ItemCart(catalog[dataId]));
    }
    createCartText();
    createCartSlide();
})

// удаление товаров из корзины
$slider.addEventListener('click', function (event) {
    if (event.target.className === 'delete-btn') {
        const dataId = Number(event.target.getAttribute('data-id'));
        cart.splice(dataId, 1);
    }
    console.log(cart);
    createCartSlide();
    createCartText();
});


