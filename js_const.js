let a = 100; // block Scoped

const x = 80; // Block Scoped

const r = 56; // const varibales must be initialized

x = 78; // assignment to constant variable is not allowed
{
    const y = 89;
    console.log(y);
}

console.log(x);

const fruits = ['guava','mango','apple'];
// const keyword is used to point unique reference

