
const book = {
    title: 'The Chase of the Golden Meteor',
    author: 'Jules Verne',
    info() {
        // this refers to the book object
        // and it's used to access its properties
        return `${this.author}: ${this.title}`;
    }
}

console.log(book);
console.log(book.info());


// For a function defined outside of an object, this will refer to the global
// object (window in a browser, global in Node.js). 

console.log(this);
