'use strict';

// set - выведет этот массив без повторов

// const arr = [1, 1, 2, 2, 4, 5, 6, 5];

const arr = ['Alex', 'alex', 'Alex', 'Ann', 'Ann', 'Oleg', 'Oleg'];

function unique(arr) {
    return Array.from(new Set(arr));
}

console.log(unique(arr));

// const set = new Set(arr);

// методы сета

// set.add('Ivan')
//    .add('Oleg');

// console.log(set);

// set.delete(value);
// set.has(value);
// set.clear();
// set.size;

// переборы:

// for (let value of set) console.log(value); 
// set.forEach((value, valueAgaing) => {
//     console.log(value, valueAgaing)
// });

// console.log(set.values()) 
// console.log(set.keys());
// console.log(set.entries());