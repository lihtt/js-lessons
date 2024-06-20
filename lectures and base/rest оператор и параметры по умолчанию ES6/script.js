// rest оператор записывается всегда в последнюю очередь
// Называть его можно абсолютно как угодно

const log = function(a, b, ...rest) {
    console.log(a, b, rest);
}

log('basic', 'rest', 'operator', 'usage');

//

function calcOrDouble(number, basis = 2) {
    // basis = basis || 2; // как делали до ES6
    console.log(number * basis);
}

calcOrDouble(3);