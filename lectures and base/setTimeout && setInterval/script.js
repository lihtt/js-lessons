// const timer = setTimeout(function(text) {
// 		console.log(text);
// }, 2000, 'Hello'); // время в таймаутах обычно выставляется в миллисекундах

// setTimeout(logger, 2000);

// function logger() {
//     console.log('text');
// }

// Если нам нужно остановить таймер в определенный момент/ввести интервал, по прошествию которого, будет выводиться какое либо действие, например, после нажатия кнопки

const btn = document.querySelector('.btn')
let timer,
    i = 0;

function myAnimation() {
	const elem = document.querySelector('.box');
	let pos = 0;

	const id = setInterval(frame, 10);
	function frame() {
		if (pos == 300) {
			clearInterval(id);
		} else {
			pos++;
			elem.style.top = pos + 'px';
			elem.style.left = pos + 'px';
		}
	} 
}

btn.addEventListener('click', myAnimation);


// btn.addEventListener('click', () => {
//     // const timer = setTimeout(logger, 2000);
//     timer = setInterval(logger, 500);
// });

// function logger() {
//     if (i === 3) {
//         clearInterval(timer);
//     }
//     console.log('text');
//     i++;
// }


// Рекурсивный таймаут позволяет не рушить отведенное время повторение времени, которое требуется на выполнение фунцкии
// let id = setTimeout(function log() {
//     console.log('Hello');
//     id = setTimeout(log, 500);
// }, 500);

