
const book = {
    _title: 'The Chase of the Golden Meteor',
    _author: 'Jules Verne',

    get title() {
        return this._title
    },
    set title(title) {
        this._title = title;
    },
    get author() {
        return this._author
    },
    set author(author) {
        this._author = author;
    }
}

console.log(`${book.author} wrote ${book.title}`);

book.author = 'Karl Marx';
book.title = 'Das Kapital';

console.log(`${book.author} wrote ${book.title}`);
