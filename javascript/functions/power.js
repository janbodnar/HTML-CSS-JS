
function power(x, y=1) {

    if (y === 0) {
        return 1;
    }

    let z = x;

    for (let i=1; i<y; i++) {
       x = x * z;    
    }

    return x;
}

console.log(power(3));
console.log(power(3, 0));
console.log(power(3, 3));
console.log(power(5, 5));
