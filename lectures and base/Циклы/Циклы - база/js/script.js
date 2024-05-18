"use strict"

//option 1

let num = 50;

while (num <= 55) {
    console.log(num);
    num++;
}

//option 2

let num = 50;

do {
    console.log(num);
    num++;
}
while(num <= 55);

//option 3

let num = 50;

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        /* break; */ // доходя до определенного значение, заканчивает цикл
        continue; // доходя до определенного значение, позволяет его пропустить
    }
    console.log(i);
}
