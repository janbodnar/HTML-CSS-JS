// ECMAScript 2015 introduced a shorter syntax for method definitions 
// info() {}  or info: function() {}

const book = {
    title: 'The Chase of the Golden Meteor',
    author: 'Jules Verne',
    info() {

        return `${this.author}: ${this.title}`;
    }
}
