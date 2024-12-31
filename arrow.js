// ES5 
function sum(a,b){ 
    console.log("sum of 2 numbers is");
    return a+b;
}

// ES6  // function Expressions
const sum = (a, b) => {
    console.log("sum of 2 numbers is");
    return a+b
};


const result = sum(2,4);
console.log("result",result);