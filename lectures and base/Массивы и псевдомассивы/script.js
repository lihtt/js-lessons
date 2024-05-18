"use strict";

const arr = [2, 3, 6, 8, 10];

/* arr[99] = 0;
console.group(arr.length); //свойство length состоит из последнего индекса + 1
console.log(arr);
 */

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
}); 

/* arr.pop(); // Удаляет последний элемент из массива
arr.push(10); // Добавляет элемент в конец массива

console.log(arr); */

/* for (let i = 0; i <arr.length; i++) {
    console.log(arr[i]);
} */

/* for (let value of arr) {
    console.log(value)
} */

const str = prompt("", "");
const products = str.split(", "); // Разделяет введенную строчку по запятым и преобразовывает в масссив
products.sort(); // Сортирует элементы как строки, например по алфавиту
console.log(products.join('; ')); // Склеивает из массива строку, которая будет разделяться "; "

const arr = [2, 13, 26, 8, 10];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}