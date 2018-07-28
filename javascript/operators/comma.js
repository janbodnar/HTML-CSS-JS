
let x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let y = [x, x, x, x, x];

console.log(y);

for (var i = 0, j = 9; i <= j; i++, j--) {

    console.log('y[' + i + '][' + j + ']= ' + y[i][j]);
}
