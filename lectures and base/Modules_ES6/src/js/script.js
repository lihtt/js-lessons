// import * as data from './main.js'; // экспорт всего

// // console.log(`${data.one} and ${data.two}`);
// data.sayHi();

// import {one as first} from './main'; // тем самым мы переименовываем переменную

// console.log(first);



import {one, two} from './main.js';
import sayHi from './main.js';

console.log(`${one} and ${two}`);
sayHi();