'use strict'

// задание № 1

var a = 1;
var b = 1;
var c;
var d;

c = ++a;
alert(c);         // 2 префиксная форма возвращает новое значение, т.е. а=1+1=2

d = b++;
alert(d);         // 1 постфиксная форма возвращает старое значение(до прибавления 1), т.е. 1

c = (2 + ++a);
alert(c);         // 5 префиксная форма возвращает новое и уже измененное значение, т.е. а=2+1=3 с=2+3=5 

d = (2 + b++);
alert(d);         // 4 постфиксная форма возвращает старое, но уже измененное, значение, т.е. b=2 d=2+2=4

alert(a);         // 3 выводится результат а=1+1+1=3 

alert(b);         // 3 выводится результат b=1+1+1=3

// задание № 2

var a = 2;

var x = 1 + (a *= 2); // 5      x = 1 + (2 * 2) = 5

// задание № 3

let e = +prompt('Введите первое число');
let f = +prompt('Введите второе число');

if (e >= 0 && f >= 0)
    alert(e - f);
else if (e < 0 && f < 0)
    alert(e * f);
else
    alert(e + f);

// задание № 4

let g = +prompt('Введите число a от 0 до 15');

switch (g) {
    case 0:
        alert(g);
        g++;
    case 1:
        alert(g);
        g++;
    case 2:
        alert(g);
        g++;
    case 3:
        alert(g);
        g++;
    case 4:
        alert(g);
        g++;
    case 5:
        alert(g);
        g++;
    case 6:
        alert(g);
        g++;
    case 7:
        alert(g);
        g++;
    case 8:
        alert(g);
        g++;
    case 9:
        alert(g);
        g++;
    case 10:
        alert(g);
        g++;
    case 11:
        alert(g);
        g++;
    case 12:
        alert(g);
        g++;
    case 13:
        alert(g);
        g++;
    case 14:
        alert(g);
        g++;
    default:
        alert(g);
        break;
}

// задание № 5

function calcSum(arg1, arg2) {
    return arg1 + arg2;
}

function calcDifference(arg1, arg2) {
    return arg1 - arg2;
}

function calcProduct(arg1, arg2) {
    return arg1 * arg2;
}

function calcQuotient(arg1, arg2) {
    return arg1 / arg2;
}

// задание № 6

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'addition':
            return calcSum(arg1, arg2);
        case 'subtraction':
            return calcDifference(arg1, arg2);
        case 'multiplication':
            return calcProduct(arg1, arg2);
        case 'division':
            return calcQuotient(arg1, arg2);
        default:
            break;
    }
}

let arg1 = +prompt('Введите первое число');
let arg2 = +prompt('Введите второе число');
let operation = prompt('Введите название математической операции: addition - сложение, subtraction - вычитание, multiplication - умножение, division - деление');

alert(mathOperation(arg1, arg2, operation));

// задание № 7

alert(null > 0);    // false  т.к. при сравнениях null преобразуется в 0 и 0 не больше 0
alert(null >= 0);   // true   т.к. при сравнениях null преобразуется в 0 и 0 равен 0
alert(null == 0);
// false  т.к. при нестрогом равенстве null ни к чему не приводится и может быть равен только undefined
alert(null === 0);  // false  т.к. разные типы при строгом равенстве не преобразуются 

// задание № 8

function power(val, pow) {
    if (pow == 1)
        return val;
    else
        return val * power(val, (pow - 1));
}

let val = +prompt('Введите число');
let pow = +prompt('Введите степень числа');

alert(power(val, pow));