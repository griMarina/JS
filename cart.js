'use strict'

let cart = document.querySelector('.cart');

function item(name, price, size, color, quantity) {
    this.name = name,
        this.price = price,
        this.size = size,
        this.color = color,
        this.quantity = quantity;
}

function countQuantity(array) {
    let sum = 0;
    for (let item of array) {
        sum += item.quantity;
    }
    return sum;
}

function countCartPrice(array) {
    let sum = 0;
    for (let item of array) {
        sum += (item.price * item.quantity);
    }
    return sum;
}

let cartArr = [
    new item('dress', 1000, 's', 'black', 1),
    new item('shirt', 800, 'm', 'green', 2),
    new item('bag', 2000, 'oneSize', 'black', 1),
    new item('socks', 200, 's', 'black', 3),
];

let quantityTotal = countQuantity(cartArr);
let sumTotal = countCartPrice(cartArr);

if (quantityTotal === 0) {
    cart.textContent = 'Корзина пуста'
} else {
    cart.textContent = `В корзине ${quantityTotal} товаров на сумму ${sumTotal}`
};