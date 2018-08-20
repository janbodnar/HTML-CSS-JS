let text = 'I met her in 2012. She must be now about 27 years old.'

let pattern = /\d+/g;

var found = text.match(pattern);

console.log(`There are ${found.length} numbers`);

found.forEach((num, i) => {
    console.log(`match ${++i}: ${num}`);
});
