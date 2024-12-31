
// for loop
for(let i = 1; i < 100; i==){
    console.log(i); // 1 2
}

// for in
const user = {Harry: 56 , Akash:67, Suraj:78};

for (key in user) {
    console.log(user[key])
}

// for of

const fruits = ['guava', 'apple','mango'];

for(let fruit of fruits){
    console.log(fruit);
}

// while

let value = 1;

while(value <= 10){
    console.log(value);
    value++;
}

// do while

let num = 1

do {
    console.log(num);
    num++;
}while(num <= 5);


