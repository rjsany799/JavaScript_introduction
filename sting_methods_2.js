let text = "hello Rajan !! " ;

console.log(text.charAt(0));

// ASCII code A-Z 65
console.log(text.charCodeAt(6));

console.log(text.at(-5)); // can use negative 

console.log(text[2]);

text[2] = "y"; // no changes

// slice

console.log(text.slice(2));
console.log(text.slice(2 ,8));
console.log(text.slice(-2));

// substring

console.log(text.substring(2));
console.log(text.substring(-2)); // negative indexing is not considered in substring

// substr

console.log(text.substr(0,4));


