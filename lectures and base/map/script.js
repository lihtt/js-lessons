'use strict';

// Карта - это массив с массивами

// const user = {
//     4: 'Alex',
//     surname: 'Smith',
//     birthday: '20/04/1993',
//     showMyPublicData: function() {
//         console.log(`${this.name} ${this.surname}`);
//     }
// }
// console.log(typeof(Object.keys(user)[0]));

const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50}
];

const budget = [5000, 15000, 25000];

const map = new Map([
    [{paper: 400}, 8000]
]);

shops.forEach((shop, i) => {
    map.set(shop, budget[i]);
});

console.log(map);


// Способ 1
// map.set(shops[0], 5000).set(shops[1], 15000).set(shops[2], 25000);

// Способ 2
// map.set(shops[0], 5000);
// map.set(shops[1], 15000);
// map.set(shops[2], 25000);

// Способ 3
// map.set(shops[0], 5000)
//     .set(shops[1], 15000)
//     .set(shops[2], 25000);


// console.log(map.get(shops[0])); // помогает получить значение
// console.log(map.has(shops[0])); // проверяет на наличие чего либо

// map.delete(key); // удаляет 
// map.clear(shops[0]); // очищает карту
// map.size(); // количество элементов в карте на данный момент


// СПОСОБЫ ПЕРЕБОРА КАРТ:

// map.keys()

// Задача на .keys: нам надо получить наименование каждого товара 
// const goods = [];

// for (let shop of map.keys()) {
//     goods.push(Object.keys(shop)[0]);
// }
// console.log(goods);

// for (let price of map.values()) {
//     console.log(price);
// }

// for (let [shop, price] of map.entries()) {
//     console.log(price, shop);
// }

map.forEach((value, key , map) => {
    console.log(key, value);
});


// Создать карту из объекта:

const user = {
    4: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
}

const userMap = new Map(Object.entries(user)); // из объекта массив с массивами
// console.log(userMap);

const newUserObj = Object.fromEntries(userMap); // из массиво подобного объекта создает реальный объект
console.log(newUserObj);