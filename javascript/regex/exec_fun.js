let words = ['book', 'bookworm', 'Bible',
    'bookish', 'cookbook', 'bookstore', 'pocketbook'];

let pattern = /book/;

words.forEach(word => {

    let res = pattern.exec(word);

    if (res) {

        console.log(`${res} matches ${res.input} at index: ${res.index}`);
    }
});
