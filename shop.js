'use strict'

const cart = document.querySelector('.cart');
const catalog = document.querySelector('.catalog');

function item(name, price, img, size, color, quantity = 1) { // конструктор для создания товаров
    this.name = name,
        this.price = price,
        this.img = img,
        this.size = size,
        this.color = color,
        this.quantity = quantity;
}

function countQuantity(array) { // подсчет количества товаров в корзине
    let sum = 0;
    for (let item of array) {
        sum += item.quantity;
    }
    return sum;
}

function countCartPrice(array) { // подсчет общей cтоимости 
    let sum = 0;
    for (let item of array) {
        sum += (item.price * item.quantity);
    }
    return sum;
}

function createCatalog(array) { // вывод товаров с названием и картинкой
    for (let i = 0; i < 6; i++) {
        item = document.createElement('div');
        let img = document.createElement('img');
        img.src = array[i].img;
        img.alt = 'image';
        item.appendChild(img);
        let title = document.createElement('span');
        title.textContent = (array[i].name);
        item.appendChild(title);
        catalog.appendChild(item);
    }
}

// массив корзины
let cartArr = [
    new item('Rucksack', 1000, '', 'one size', 'grey', 1,),
    new item('Suit', 3000, '', 'm', 'black', 1),
    new item('Jacket', 4000, '', 'l', 'black', 1),
    new item('Trousers', 2000, '', 'l', 'yellow', 2),
    new item('jacket', 1500, '', 'm', 'blue', 1),
    new item('Shirt', 1200, '', 's', 'green', 3)
];
console.log(cartArr);

//массив каталога
let catalogArr = [
    new item('Rucksack', 1000, 'img/item-1.jpg', 'one size', 'grey'),
    new item('Suit', 3000, 'img/item-2.jpg', 'm', 'black'),
    new item('Jacket', 4000, 'img/item-3.jpg', 'l', 'black'),
    new item('Trousers', 2000, 'img/item-4.jpg', 'l', 'yellow'),
    new item('Jacket', 1500, 'img/item-5.jpg', 'm', 'blue'),
    new item('Shirt', 1200, 'img/item-6.jpg', 's', 'green')
]
console.log(catalogArr);

// Вывод текста в корзине
if (countQuantity(cartArr) === 0) {
    cart.textContent = 'Корзина пуста';
} else {
    cart.textContent = `В корзине ${countQuantity(cartArr)} товаров на сумму ${countCartPrice(cartArr)} рублей`;
};

// вывод товаров из массива каталог
createCatalog(catalogArr);