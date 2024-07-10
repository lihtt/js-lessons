"use strict";

// new RegExp('pattern', 'flags');
// /pattern/flags 

// const ans = prompt('Введите ваше число');

// const reg = /\d/g;
// console.log(ans.match(reg)); // test - выдает булиновое значение в зависимости от совпадения


const str = 'My name is R2D2';

// console.log(str.match(/\w\d\w\d/i));
console.log(str.match(/\D/ig));


// \D - не числа
// \W - не буквы


// classes:
// \d - таким образом мы ищем цифры
// \w - все слова/буквы
// \s - пробелы


// flags:
// i - Если мы хотим что-то найти вне зависимости от регистра
// g - Пытаемся найти сразу несколько вхождений
//     ищет всегда только первое совпадение
// m - Включает многострочный режим

// console.log(ans.search(reg));
// console.log(ans.match(reg));



// const pass = prompt('Password');

// console.log(pass.replace(/\./g, "*"));

// Если мы ставим точку '/./', мы берем все элементы в строке
// Если нам понадобиться выделить именно эту точку, то нужно 
// прописать это вот так '/\./'

// console.log('12-34-56'.replace(/-/g, ':'));

