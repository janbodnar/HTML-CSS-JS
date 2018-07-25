const Big = require('big.js');

var val = new Big(0.0);
// two euros fifty-five cents
var amount = new Big(2.55);

var sum = val.plus(amount).times(100000);

console.log(sum.toFixed(2));
