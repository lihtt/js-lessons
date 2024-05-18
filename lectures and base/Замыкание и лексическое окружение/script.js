"use strict";

/* let number = 5; debugger

function logNumber() {
    let num = 4; debugger
    console.log(number);
}

number = 6;

logNumber(); debugger */

function createCounter() {
    let counter = 0;

    const myFunction = function() {
        counter = counter + 1;
        return counter;
    }
    return myFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);

////////////
for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        let num = 3;
    }
    console.log(num)
}
// Почему мы не можем обратиться num?
// num существует только внутри фигурных скобок, то есть внутри лексичесекого окружения этого цикла, причем каждой его итерации
// внутри каждой итерации вот этого цикла:
// for (let j = 0; j < 9; j++) {
//    let num = 3;
// }
// будет создаваться свой num и снаружи мы его получить не можем