

function sum(...vals) {

    return vals.reduce((sum, next) => sum + next);
}

console.log(sum(1, 2));
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 5));
