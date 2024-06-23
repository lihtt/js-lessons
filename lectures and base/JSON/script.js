'use strict';
// JavaScript Object Notation - JSON
// Все сущности должны быть записаны в двойные кавычки

// const persone = {
//     name: 'Alex',
//     tel: '+74444444'
// };

// console.log(JSON.stringify(persone)); // {"name":"Alex","tel":"+74444444"}
// console.log(JSON.parse(JSON.stringify(persone))); // { name: 'Alex', tel: '+74444444' }

// 

const persone2 = {
    name: 'Alex',
    tel: '+74444444', 
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

const clone = JSON.parse(JSON.stringify(persone2));
clone.parents.mom = 'Ann';
console.log(persone2);
console.log(clone);