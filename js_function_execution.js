var z = 10;
x();
y();
console.log(z);

function x() {
    var z = 20;
    console.log(z); //20
}

function y () {
    var z = 30; //30
    console.log(z);
}