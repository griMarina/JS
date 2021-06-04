// задание № 1

let i = 2;
checki: while (i <= 100) {
    checkj: for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            i++;
            continue checki;
        }
    }
    console.log(i++);
}

// задание № 2

function countBasketPrice(array) {
    let sum = 0;
    for (let item = 0; item < array.length; item++) {
        sum += array[item]
    }
    return sum;
}

let itemsInBasket = [100, 35, 40, 25];  // массив с товарами в корзине
console.log('Oбщая стоимость всех товаров в корзине: ' + countBasketPrice(itemsInBasket) + '$');

// // задание № 3

for (let i = 0; i <= 9; console.log(i++)) {

};

// // задание № 4

let x = 'x';

for (let i = 0; i <= 20; i++) {
    console.log(x);
    x += 'x';
};