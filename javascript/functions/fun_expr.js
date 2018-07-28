
// function expressions 
// they are not hoisted

var f = function(x) {

    return x * x;
}

console.log(typeof f);

let a = f(4);

console.log(a);
console.log(typeof a);
