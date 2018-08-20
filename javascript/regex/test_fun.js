let words = ['book', 'bookworm', 'Bible', 
    'bookish','cookbook', 'bookstore', 'pocketbook'];

let pattern = /book/;

words.forEach(word => {

    console.log(pattern.exec(word));
});
