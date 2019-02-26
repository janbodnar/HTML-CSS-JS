class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

const book = new Book('The Chase of the Golden Meteor', 
    'Jules Verne');

console.log(book.title);
console.log(book.author);
