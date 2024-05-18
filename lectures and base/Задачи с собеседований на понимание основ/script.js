// •	Какое будет выведено значение: let x = 5; alert( x++ );  =    ответ 5
// let x = 5; alert( ++x );  = 6 

// •	Чему равно такое выражение: [ ] + false - null + true;   = false  - это строка(string) NaN

// •3	Что выведет этот код: let y = 1; let x = y = 2; alert(x);   = 2

// •4	Чему равна сумма [ ] + 1 + 2; = 12

// •5	Что выведет этот код: alert( "1"[0] ); = 1

// •6	Чему равно 2 && 1 && null && 0 && undefined ;  = null - потому что оператор && всегда запинается на лжи (false)

// •7	Есть ли разница между выражениями? !!( a && b ) и (a && b)? da

//                                              3
// •8	Что выведет этот код: alert( null || 2 && 3 || 4 ); = 3
// && запинается на лжи
// || запинается на правде

// •9	a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ? false - так как это разные хранилища информации и в них лежит разная информация

// •10	Что выведет этот код: alert( +"Infinity" ); = Infinity

// •11	Верно ли сравнение: "Ёжик" > "яблоко"; таблица Unicode

// •12	Чему равно 0 || "" || 2 || undefined || true || falsе; =  2 

const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Закрыто' : answer = 'Открыто';

    return answer;
};

console.log(isOpen(restorantData.openNow))

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0, -1) + (sDish.price) < average) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.assign({}, data);

    copy.waitors = {name: 'Mike', age: 32};
    return copy;
}

transferWaitors(restorantData);