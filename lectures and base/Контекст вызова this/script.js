'use strict';

// Основа:
// 1) Обычная функция: this = window, но если стоит use strict - undefined
// 2) Контекст у методов объекта - сам объект
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4) Ручная привязка this: call, apply, bind

//-------------------------------------------------------------------------------------------

// 1) Обычная функция: this = window, но если стоит use strict - undefined

// function showThis() {
//     console.log(this);
// }

// showThis();

// 
// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//         // return this.a + this.b; // = undefined
//     }
//     console.log(sum());
// }

// showThis(4, 5);


// 2) Контекст у методов объекта - сам объект

// const obj = {
//     a: 20,
//     b: 15, 
//     sum: function() {
//         console.log(this);
//     }
// };

// obj.sum();


// 3) this в конструкторах и классах - это новый экземпляр объекта

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log("Hello! " + this.name);
//     };
// }

// let ivan = new User('Ivan', 23);

//

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = { 
//     name: 'John'
// };

// Делают одно и то же, но разница в синтаксесе:
// sayName.call(user, 'Smith'); // Аргументы передаются просто через запятую
// sayName.apply(user, ['Smith']); // Аргументы должны передаваться в массиве


// 4) Ручная привязка this: call, apply, bind

// function count(num) {
//     return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));


//


const btn = document.querySelector('button');


// В обработчиках событий, когда мы используем обычный синтаксис (через function), мы имеем доступ к this. 
// Если же мы здесь используем стрелочную функцию, то контекст вызова теряется и мы получаем undefined
// btn.addEventListener('click', function(){
//     this.style.backgroundColor = 'red';
// }); // рабочий вариант

// btn.addEventListener('click', () => {
//     this.style.backgroundColor = 'red';
// }); // undefined

btn.addEventListener('click', (e) => {
    e.style.backgroundColor = 'red';
});

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this.num);
        };

        say();
    }
};

obj.sayNumber();

// return здесь подставляется автоматически:

const double = a => a * 2;

// const double = (a) => {
//     return a * 2;
// };

console.log(double(4))