// Anonymous function expression

const f1 = function () {
    return 'Hello!';
}

// Named function expression

const f2 = function hello() {
    return 'Hello there!';
}

console.log(f1.name);
console.log(f1());

console.log('*************');

console.log(f2.name);
console.log(f2());
