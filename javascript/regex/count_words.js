let text = 'The Sun was shining; I went for a walk.';

let pattern = /\w+/g;

let found = text.match(pattern);

console.log(`There are ${found.length} words`);
