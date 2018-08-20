let words = ['tree', 'car', 'pen', 'forest', 'new',
    'book', 'tool', 'rock', 'cool', 'chair'];

let pattern = /^[a-z]{3,4}$/;

words.forEach(word => {

    if (pattern.test(word)) {

        console.log(`the ${word} matches`);
    }
});
