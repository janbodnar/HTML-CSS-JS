// es6, ES2015

function pow(x, y = 2) {
  return x * y;
}

const x = pow(10);
console.log(x);

const y = pow(5, 3);
console.log(y);
