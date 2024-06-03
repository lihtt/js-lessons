'use strict';
// Итерируемые объекты, те, которые могут быть перебраны при помощи for of
// Те структуры/объекты которые содержат итерейтор iterator

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
}

// for (const key in user) { // for in получает ключ
//     console.log(user[key]);
// }

const arr = ['b', 'a', 'c'];
Array.prototype.someMethod = function() {};

console.dir(arr);

for (const key in arr) { // for of получает значение
    console.log(key);
}

// const str = ['a', 'b', 'c'];

// for (const key in str) {
//     console.log(str[key]);
// }


const salaries = {
    John: 500,
    Ivan: 1000,
    ann: 5000,
    sayHello: function() {
        console.log("Hello");
    }
}

salaries[Symbol.iterator] = function() {
    return {
        current: this.John,
        last: this.ann,
        next() {
            if (this.current < this.last) {
                this.current = this.current + 500;
                return {done: false, value: this.current}
            } else {
                return{done: true}
            }
        }

    }
}

const iterator = salaries[Symbol.iterator]();
console.log(iterator.next());

// for (let res of salaries) {
//     console.log(res);
// }