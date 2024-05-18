'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');

/* box.style.backgroundColor = 'blue';
box.style.width = '500px'; */

box.style.cssText = `background-color: blue; width: 500px`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';


//1
/* for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'blue';
} */

//2
hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я'); - такой метод используется крайне редко

div.classList.add('black');

wrapper.append(div);
// wrapper.appendChild(div); // устаревшая версия


//wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].after(div);

//wrapper.insertBefore(div, hearts[2]); // устаревшая версия


// circles[0].remove();
//wrapper.removeChild(hearts[1]); // устаревшая версия


// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]); // устаревшая версия

div.innerHTML = "<h1>Hello World!</h1>";

// div.textContent = "Hello"; // <h1></h1> тут будет превращаться в обычный текст

div.insertAdjacentHTML("afterend", '<h2>Hello</h2>');