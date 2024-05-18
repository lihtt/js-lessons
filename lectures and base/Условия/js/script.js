"use strict"

if (4 == 9) {
    console.log('Ok!')
} else {
    console.log('Error');
}

const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Too much')
} else {
    console.log('Ok')
}

(num === 50) ? console.log('Ok!') : console.log('Error'); //Тернарный оператор
4 + 4 //бинарный аргумент 
+'4' //унарный аргумент


const num = 51;

switch (num) { //switch - всегда идет на строгое сравнение
    case 49: 
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 50:
        console.log('В точку!');
        break;
    default:
        console.log('Не в этот раз')
        break;
}