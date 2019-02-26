const book = {
    title: 'The Chase of the Golden Meteor',
    author: 'Jules Verne',
    info() {
        return `${this.author}: ${this.title}`;
    }
}

const { title, author } = book;

console.log(title);
console.log(author);
