let text = 'I saw a fox in the wood. The fox had red fur.';

let pattern = /fox/g;

let found = text.match(pattern);

console.log(`There are ${found.length} matches`);
