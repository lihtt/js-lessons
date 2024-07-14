export let one = 1;

let two = 2;

export {two}; // именованый синтаксис

// export function sayHi() {
//     console.log('Hello!')
// }

export default function sayHi() { // экспорт по умолчанию
    console.log('Hello!')
}