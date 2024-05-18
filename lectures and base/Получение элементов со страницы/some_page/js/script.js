'use strict';

const box = document.getElementById('box');

console.log(box)

// const btns = document.getElementsByTagName('button')[1]; или

const btns = document.getElementsByTagName('button');

console.log(btns[1]);

const circles = document.getElementsByClassName('circle');
console.log(circles);

// более современные методы:

const hearts = document.querySelectorAll('.heart'); //здесь мы можем использовать элементы названные нами в html

hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart') //позволяет получить только первый элементы со страницы
console.log(oneHeart);

