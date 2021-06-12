'use strict'

function item(name, price, size, color, quantity) {
    this.name = name,
        this.price = price,
        this.size = size,
        this.color = color,
        this.quantity = quantity;
};

let item1 = new item('dress', 100, 's', 'black', 1);
let item2 = new item('shirt', 80, 'm', 'green', 1);
let item3 = new item('bag', 200, 'oneSize', 'black', 1);
let item4 = new item('socks', 20, 's', 'black', 2);

let basket = [item1, item2, item3, item4];
console.log(basket);

function countBasketPrice(array) {
    let sum = 0;
    for (let item of array) {
        sum += (item.price * item.quantity);
    }
    return sum;
}
console.log(countBasketPrice(basket));