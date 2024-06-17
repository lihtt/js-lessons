'use strict';

// Текущая дата, обычно берется из системы:
// const now = new Date();

// console.log(now);


// Дату задаем уже непосредственно мы:
// const now = new Date('2020-05-01');
// new Date.parse('2020-05-01'); // альтернативный синтаксис

// console.log(now);


// Дату задаем уже непосредственно мы, так же учитывет часовые пояса, стандарт идет от гринвича:
// const now = new Date(2020, 5, 1, 20);

// console.log(now);


// Задаем с помощью миллисекунд, отсчет от 1910.01.01:
// const now = new Date(0);
// const now1 = new Date(-9999);

// console.log(now);
// console.log(now1);


// Текущий год/месяц/часы и тд:
// const now = new Date();

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());

// console.log(now.getDay()); // выводит день недели, отсчет начинается с воскресенья

// console.log(now.getUTCHours()); // по UTC


// Дату задаем уже непосредственно мы:
// const now = new Date();

// console.log(now.getTimezoneOffset());
// console.log(now.getTime()); // сколько прошло миллисекунд с 1910.01.01


// Set, все то же самое, но задаем дату мы, берет информацию с UTC зоны, если запускать с консоли, но если запускать в браузере, возвращать будет локальное время

// js автоматом исправляет неточности, например, если задать 40 часов в set.Hours, нам выдаст следуюший день


// Даты можем использовать для измерение времени между ними
let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд`)