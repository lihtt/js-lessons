'use strict';

const birthday = '20/04/2021';

const user = {
    name: 'Alex',
    surname: 'Smith',
    [Symbol('birthday')]: '20/04/2021',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
}

// Object.defineProperty(user, 'birthday', {value: prompt('Date?'), enumerable: true, configurable: true});

Object.defineProperty(user, 'showMyPublicData', {enumerable: false});

for (let key in user) console.log(key);

console.log(Object.getOwnPropertyDescriptor(user, 'PI'));

Object.defineProperties(user, {
    name: {writable: false},
    surname: {writable: false}
})

// writable
// enumerable
// configurable