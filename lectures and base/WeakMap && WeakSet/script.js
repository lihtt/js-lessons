"use strict";
// WeakMap и WeakSet - дополнительные хранилища данных для объектов
// WeakMap

// 1 пример

// let user = {name: 'Ivan'};

// const arr = [user];
// user = null;

// console.log(user);
// console.log(arr[0]);

// WeakMap, 2 важные особенности
// 1. в ней ключами могут быть только объекты
// 2. Если нет ссылки на объект и он существует только в WeakMap, он будет удален из нее
 

// 2 пример

// let user = {name: 'Ivan'};

// let map = new WeakMap();
// map.set(user, 'data');

// user = null;


// console.log(map);
// console.log(map.has(user));



// Если юзер состоящий в чате выходит в оффлайн, он стирается, чтобы не засорять память 

let cache = new WeakMap();

function cacheUser(user) {
    if (!cache.has(user)) {
        cache.set(user, Date.now());
    }
    
    return cache.get(user);
}

let lena = {name: 'Elena'};
let alex = {name: 'Alex'};

cacheUser(lena);
cacheUser(alex);

lena = null;

console.log(cache.has(lena));
console.log(cache.has(alex));



// WeakSet
// add, has, delete и он не является перебираемым 

let messages = [
    {text: 'Hello', from: 'John'},
    {text: 'World', from: 'Alex'},
    {text: '!!', from: 'Mike'},
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
// readMessages.add(messages[1]);

readMessages.add(messages[0]);

console.log(readMessages.has(messages[0]));

messages.shift(); // удаляет первый объект
console.log(readMessages.has(messages[0]));