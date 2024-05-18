"use strict";

//To string

// 1)
console.log(typeof(String(null))); // Устаревший способ
console.log(typeof(String(4)));

// 2)
console.log(typeof(null + '')); //null or number

const num = 5;

console.log("https://vk.com/catalog/" + num); // Устаревшея версия

const fontSize = 26 + 'px';

// To Number

// 1)
console.log(typeof(Number('4'))); // Устаревший способ

// 2)
console.log(typeof(+'5'));

// 3)
console.log(typeof(parseInt("15px", 10)));

let answ = +prompt("Hello", "");

// To boolean

// 0, '', null, undefined, NaN; - always false

// 1)
let switcher = null;

if(switcher) {
    console.log('Working...');
}

switcher = 1;

if(switcher) {
    console.log('Working...');
}

// 2)
console.log(typeof(Boolean('4')));

// 3)
console.log(typeof(!!"44444"));