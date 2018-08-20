let text = 'I saw a fox in the wood. The fox had red fur.';

let pattern = /fox/;

let idx = text.search(pattern);
console.log(`the term was found at index: ${idx}`);
