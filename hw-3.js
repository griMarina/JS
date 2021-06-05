// задание № 1

let i = 2;
checki: while (i <= 100) {
    let j = 2;
    checkj: while (j < i) {
        if (i % j == 0) {
            i++;
            continue checki;
        }
        j++;
    }
    console.log(i++);
}

// в задании сказано создать цикл while, но кажется, что с for выглядит симпатичнее :)

checki: for (let i = 2; i <= 100; i++) {
    checkj: for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            continue checki;
        }
    }
    console.log(i);
}

// задание № 2

function countBasketPrice(array) {
    let sum = 0;
    for (let item of array) {
        sum += item;
    }
    return sum;
}

let itemsInBasket = [100, 35, 40, 25];  // массив с товарами в корзине
console.log('Oбщая стоимость всех товаров в корзине: ' + countBasketPrice(itemsInBasket) + '$');

// задание № 3

for (let i = 0; i <= 9; console.log(i++)) {

};

// задание № 4

let x = 'x';

for (let i = 0; i <= 20; i++) {
    console.log(x);
    x += 'x';
};