
// functions can be hoisted; e.g. called
// before they are defined

let x = square(5);

console.log(x);

function square(x) {

    return x * x;
}
