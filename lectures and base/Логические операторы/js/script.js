/* const hamburger = 5;
const fries = null;

if (hamburger && fries) {
    console.log('Я сыт!');
} */

const hamburger = 3;
const fries = 1;
const cola = 0;

console.log(hamburger === 3 && cola && fries); // получаем 0 - это первое значение на котором оператор остановил свою работу

if (hamburger === 3 && cola === 1 && fries) {
    console.log('Все сыты!');
} else { 
    console.log('Мы уходим!');
}

console.log(1 && 0); //0 - так как 0 это false и оператор 'запнулся' именно на нем
console.log(1 && 5); //5 - так как они обе true, оператор возвращает последнее значение
console.log(null && 5); //null - так как null - это не правда
console.log(0 && 'dsffdsbvbsrbr'); //0 - тк это не правда и  оператор 'запнулся' именно на нем

// Оператор &&(и) возвращает первое ложное значение, если оно есть, после этого код не идет дальше, он останавливается 
// Если все аргументы верны, возвращается только последний элемент 
// И(&&) запинается на лжи, или(||) запинается на правде

//------------------------------------------------------------

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) { //Как только оператор или(||) находит правду, он перестает работать
    console.log('Все довольны!');
} else { 
    console.log('Мы уходим!');
}

console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);


let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);

console.log(!0);


//simple tasks:
console.log( NaN || 2 || undefined ); //2

console.log( NaN && 2 && undefined ); //Nan

console.log( 1 && 2 && 3 ); //3

console.log( !1 && 2 || !3 ); //false

console.log( 25 || null && !3 ); //25

console.log( NaN || null || !3 || undefined || 5); //5

console.log( NaN || null && !3 && undefined || 5); //5

console.log( 5 === 5 && 3 > 1 || 5); //true

//Выполняется ли условие?

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;


if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!')
}//done


//Выполняется ли условие?

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!')
}//done


//Выполняется ли условие?

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}//..... так как ничего не выполняется
