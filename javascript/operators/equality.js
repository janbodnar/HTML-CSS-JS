
// use === and !==

// primitives

console.log('' == '0');           // false
console.log(0 == '');             // true
console.log(0 == '0');            // true

console.log(false == 'false');    // false
console.log(false == '0');        // true

console.log(false == undefined);  // false
console.log(false == null);       // false
console.log(null == undefined);   // true

console.log(' \t\r\n ' == 0);     // true

// objects

let a = [3, 6, 9];
let b = [3, 6, 9];

console.log(a == b);            // false
console.log(a === b);           // false

let c = { x: 1, y: 2 };
let d = { x: 1, y: 2 };

console.log(c == d);            // false
console.log(c === d);           // false

let e = "forest";
let f = "for" + "est";

console.log(e == f);            // true
console.log(e === f);           // true

// https://stackoverflow.com/q/359494/2008247
