function sum (a,b = 1) {
    return a + b;
}

const result = sum(2);
console.log(result);

// Spread Syntax

function multiply(a,b) {
    return a * b;
}

const array = [2,3];

const mul = multiply(...array);
console.log(mul);