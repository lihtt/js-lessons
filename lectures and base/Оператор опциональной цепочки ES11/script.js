'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block);



/* одно и то же, но это работает только на чтении свойства*/
/* if (block) {
    console.log(block.textContent); 
} */
console.log(block?.textContent); 


console.log(1 + 2);

const userData = {
    name: 'Ivan',
    age: null,
    say: function() {
        console.log('Hello');
    }
}

userData.say();
userData.hey?.();


/* одно и то же, но это работает только на чтении свойства*/
/* if (userData && userData.skills && userData.skills.js) {
    console.log(userData.skills.js);
} */
console.log(userData?.skills?.js);


