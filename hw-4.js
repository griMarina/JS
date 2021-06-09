'use strict'

// Задание № 1

// 1 вариант
function convertNumToObj(num) {
    const digits = 'units tens hundreds'.split(' '); // массив с разрядами
    let obj = {};
    if (num > 999) {
        console.log('Введенное число больше 999');
        return obj;
    }
    for (let i = 0; i < 3; i++) {
        obj[digits[i]] = num % 10; // добавляем свойство из массива с разрядами в Объект и записываем в него значение, равное остатку от деления на 10.
        num = Math.trunc(num / 10); //получаем целую часть от числа, поделённого на 10, чтобы определить следующий разряд.
    }
    return obj;
}

// 2 вариант
function convertNumToObj2(num) {
    const digits = 'units tens hundreds'.split(' ');
    const arr = num.toString().split('').map(Number); //преобразуем число в строку, а затем в массив строк, а затем в массив чисел.
    let obj = {};
    let a = arr.length;
    if (a > 3) { // проверяем длину массива с числами
        console.log('Введенное число больше 999');
        return obj;
    }
    for (let i = 0; i < 3; i++) {
        obj[digits[i]] = arr[--a] || 0; // добавляем свойство из массива с разрядами в Объект и записываем в него значение из массива с числами
    }
    return obj;
}

let num = prompt('Введите число от 0 до 999');
console.log(convertNumToObj(num));
console.log(convertNumToObj2(num));


// Задание № 2 и 3

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


// let totalSum = basket.reduce((sum, item) => {
//     sum += (item.price * item.quantity);
//     return sum;
// }, 0);
// console.log(totalSum);