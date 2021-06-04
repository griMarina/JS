// задание № 1

let i = 2;
let j = 2;
while (i <= 100) {
    while (j < i) {
        if (i % j == 0) {
            j++;
            i++;
            continue;
        }
    }
    console.log(i++);
}



// задание № 2

// function countBasketPrice(array) {
//     let sum = 0;
//     for (let item = 0; item < array.length; item++) {
//         sum += array[item]
//     }
//     return sum;
// }

// let itemsInBasket = [100, 35, 40, 25];  // массив с товарами в корзине
// let sumPrice = countBasketPrice(itemsInBasket); // общая стоимость всех товаров в корзине
// console.log(sumPrice);

// // задание № 3

// for (let i = 0; i <= 9; console.log(i++)) {

// };

// // задание № 4

// let x = 'x';

// for (let i = 0; i <= 20; i++) {
//     console.log(x);
//     x += 'x';
// };