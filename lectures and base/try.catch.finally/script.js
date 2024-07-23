'use strict';

try {
    console.log('Normal');
    console.log(a);
    console.log('result');
} catch(error) {
    console.log(error.name); // ReferenceError
    console.log(error.message); // a is not defined
    console.log(error.stack); // ReferenceError: a is not defined
} finally {
// Завершает блок кода при любых результатах

}

// console.log(a);
console.log('meow');