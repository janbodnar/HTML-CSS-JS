
// custom max function
function maximum(x, y) {

    if (x > y) { 
        return x;
    } else  {
        return y
    }
}

let a = 23;
let b = 32;
let c = 41;

var m1 = maximum(a, b);
console.log(`The max of ${a} and ${b} is ${m1}`);

var m2 = maximum(b, c);
console.log(`The max of ${b} and ${c} is ${m2}`);

// built-in max function
console.log(Math.max(34, 22, 31, 41, 0));
