//able to access variable before even declaring
console.log(a);
var a = 9;
console.log(a);

function greetings(){
    console.log("hello");
}

var greetings = () => {
    console.log("hello");
}
// greeting: undefined
greetings();