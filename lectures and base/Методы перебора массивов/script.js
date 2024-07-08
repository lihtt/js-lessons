"use strict";


// filter - фильтрует элементы массива

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter(function(name) {
//     return name.length < 5;
// });

// console.log(shortNames);


// map

// const answers = ['IvAn', 'AnnA', 'Hello'];

// const result = answers.map(item => item.toLowerCase());

// console.log(result);
// console.log(answers);


// every/some - выдают булиновое значение
// some - хотя бы один элемент должен соответствовать условию
// every - если каждый элемент соответствует условию

// const some = [4, 'qwq', 'ssafef'];

// console.log(some.some(item => typeof(item) === 'number'));

// console.log(some.every(item => typeof(item) === 'number'));


// reduce - схлопывает/собирает массив в одно единое целое

// const arr = [4, 5, 1, 3, 2, 6];
//                      // 0    4
//                      // 4    5
//                      // 9    1
//                      // 10   3 и тд
// const res = arr.reduce((sum, current) => sum + current, 3); // 3 - начальное значение
// console.log(res);

//--------------------------------------------

// const arr = ['apple', 'pear', 'plum'];

// const res = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(res);


const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);