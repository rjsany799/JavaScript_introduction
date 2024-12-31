let text = "Hello John !! Hello";

console.log("length of string is", text.length);

// string are immutable ---- original string does not change
const replaceString = text.replace("Hello","hii");

console.log(text);
console.log(replaceString);

const replaceAllString = text.replaceAll("Hello","Hii");
console.log(replaceAllString);


// split method
const splitString = text.split("");
console.log(splitString);

let randomtext = "anshika, internshala,color"
const randomStringSplit = randomtext.split(",");

//repeat
console.log(text.repeat(2));

// trim
const trimmedString = text.trim();
console.log(trimmedString);

const trimStart = text.trimStart();
console.log(trimStart.length);

const trimEnd = text.trimEnd();
console.log(trimEnd);

// concat

let firstName = "Rajan";
let lastName = "sahani";

const fullName = firstName.concat(lastName);

console.log(fullName);



