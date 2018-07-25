var x = 1;
let y = 1;

console.log("Outside function")
console.log(x);
console.log(y);

function fun() {

    var x = 2;
    let y = 2;

    console.log("Inside function")
    console.log(x);
    console.log(y);

}

fun();

console.log("Outside function")
console.log(x);
console.log(y);
