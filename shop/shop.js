'use strict'

const $cart = document.querySelector('.cart');
const $catalog = document.querySelector('.catalog');
const $popup = document.querySelector('.popup');
const $closePopupBtn = $popup.querySelector('.close-btn');
const $slider = $popup.querySelector('.slider')
const $cartSlide = $popup.querySelector('.cart-slide');
const $nextBtn = $slider.querySelector('.next-btn');


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

// подсчет количества товаров в корзине
function countQuantity(array) {
    let sum = 0;
    for (let item of array) {
        sum += item.quantity;
    }
    return sum;
}

// подсчет общей cтоимости корзины
function countCartPrice(array) {
    let sum = 0;
    for (let item of array) {
        sum += (item.price * item.quantity);
    }
    return sum;
}

// создание каталога с карточками
function createCatalog(array) {
    for (let item of array) {
        createItemCard(item);
    }
}

// создание карточки товара в каталоге
function createItemCard({ title, img, desc, price, id }) {
    const itemHtml = `<div class="item-card ">
    <h2 class="item-card__title ">${title}</h2>
    <img src="${img}" alt="image" class="item-card__img ">
    <p class="item-card__desc">${desc}</p>
    <p class="item-card__price">${price} руб.</p>
    <button data-id="${id}" class="item-card__btn">Добавить в корзину</button>
    </div>`;
    $catalog.insertAdjacentHTML('beforeend', itemHtml);
}

// текст корзины
function createCartText() {
    if (countQuantity(cart) > 0) {
        $cart.textContent = `В корзине ${countQuantity(cart)} ${declensionWords(countQuantity(cart))} на сумму ${countCartPrice(cart)} рублей`;
    } else {
        $cart.textContent = 'Корзина пуста';
        $cartSlide.textContent = 'Корзина пуста'
    }
}

// склонение слова "товар" в зависимости от количества
function declensionWords(number) {
    const words = ['товар', 'товара', 'товаров'];
    number = number % 100;
    let numUnits = number % 10;
    if (number > 10 && number < 20) {
        return words[2];
    }
    if (numUnits > 1 && numUnits < 5) {
        return words[1];
    }
    if (numUnits === 1) {
        return words[0];
    }
    return words[2];
}

function showPopup() {
    $popup.style.display = 'block';
}

function closePopup() {
    $popup.style.display = 'none';
}

// отрисовка товаров в корзине
function createCartSlide() {
    $cartSlide.textContent = '';
    const html = cart.map(function (item, index) {
        return `<div class="cart-item">
        <div class="cart-slide__itm" id="${index}">${item.title}: ${item.price} руб. количество: ${item.quantity}</div>
        <button data-id="${index}" class="delete-btn">Удалить</button></div>`
    }).join(' ');

    $cartSlide.insertAdjacentHTML('afterbegin', html);
}

// смена слайдов
function createSlider() {
    const slides = $slider.querySelectorAll('.slide');
    let currentSlide = 0;

    slides[currentSlide].style.display = 'block';

    function showNextSlide() {
        slides[currentSlide].style.display = 'none';
        currentSlide = (currentSlide < slides.length - 1) ? ++currentSlide : 0;
        slides[currentSlide].style.display = 'block';
    }

    $nextBtn.addEventListener('click', showNextSlide);
}

$closePopupBtn.addEventListener('click', closePopup);
$cart.addEventListener('click', showPopup);

catalog = [
    new Item('Рюкзак', 'img/item-1.jpg', 'Описание товара', 1000),
    new Item('Костюм', 'img/item-2.jpg', 'Описание товара', 3000),
    new Item('Куртка', 'img/item-3.jpg', 'Описание товара', 4000),
    new Item('Брюки', 'img/item-4.jpg', 'Описание товара', 2000),
    new Item('Пиджак', 'img/item-5.jpg', 'Описание товара', 1500),
    new Item('Рубашка', 'img/item-6.jpg', 'Описание товара', 1200)
];

createCatalog(catalog);
createCartText();

// добавление товара в корзинy
$catalog.addEventListener('click', function (event) {
    if (event.target.className === 'item-card__btn') {
        const dataId = Number(event.target.getAttribute('data-id'));
        cart.push(new ItemCart(catalog[dataId]));

        createCartText();
        createCartSlide();
    }
});

// удаление товара из корзины
$slider.addEventListener('click', function (event) {
    if (event.target.className === 'delete-btn') {
        const dataId = Number(event.target.getAttribute('data-id'));
        cart.splice(dataId, 1);

        createCartSlide();
        createCartText();
    }
});

createSlider();