'use strict'

// задание № 1

var temperatureCel = prompt('Введите значение температуры в градусах по Цельсию');
var temperatureFah = (9 / 5) * temperatureCel + 32;

alert(temperatureCel + ' градусов по Цельсию равно ' + temperatureFah + ' градусов по Фаренгейту');

// задание № 2

var admin;
var name$ = 'Василий'; // имя переменной name зачеркивается, поэтому добавила к нему $

admin = name$;

alert(admin);