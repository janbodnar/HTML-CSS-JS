// es6, ES2015

const person = { name: "Peter", age: 34 };

var {name, age} = person;

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);

const vals = [1, 2, 3, 4, 5];
const [x, y, ...z] = vals;

console.log(x);
console.log(y);
console.log(z);

// Stage 3 proposal
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); //{c: 30, d: 40}
