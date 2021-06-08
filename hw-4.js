'use strict'
// Задание № 1

// 1 вариант
function getDigit(num) {
    return (num % 10 > 0) ? num % 10 : 0; // функция возвращает остаток от деления на 10
}

function convertNumToObj(num) {
    const numDigits = {};
    if (num > 999) {
        console.log('Введенное число больше 999');
        return numDigits;
    } else {
        numDigits.units = getDigit(num); // добавляем свойство units в Объект и записываем в него значение, равное остатку от деления на 10.
        num = Math.trunc(num / 10); // получаем целую часть от числа, поделённого на 10, чтобы определить следующий разряд.
        numDigits.tens = getDigit(num);
        num = Math.trunc(num / 10);
        numDigits.hundreds = getDigit(num);
        return numDigits;
    }
}

// 2 вариант
function convertNumToObj2(num) {
    const numDigits = {};
    let arr = num.toString().split('').map(Number); // преобразуем число в строку, а затем в массив строк, а затем в массив чисел.
    if (num > 999) {
        console.log('Введенное число больше 999');
        return numDigits;
    } else {
        numDigits.hundreds = (arr.length < 3) ? 0 : arr[0]; // добавляем свойство hundreds в Объект и записываем в него значение в зависимости от длины массива.
        numDigits.tens = (arr.length >= 2) ? arr[arr.length - 2] : 0;
        numDigits.units = (arr.length >= 1) ? arr[arr.length - 1] : 0;
        return numDigits;
    }
}

let num = prompt('Введите число от 0 до 999');
console.log(convertNumToObj(num));
console.log(convertNumToObj2(num));

// Задание № 2

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