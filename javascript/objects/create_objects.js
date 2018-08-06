// https://stackoverflow.com/questions/6843951/which-way-is-best-for-creating-an-object-in-javascript-is-var-necessary-befor

// object literal

var person = { 'age': 32, 'name': 'Peter' };
//person.getName = function() { return person.name };

console.log(person.age);
console.log(person.name);
//console.log(person.getName());

person.age = 34;
console.log(`${person.name} is ${person.age} years old`);

// constructor function

function Item(name, maker) {

    this.name = name;
    this.maker = maker;
    this.getInfo = function () {
        return `${this.name} - ${this.maker}`
    };
 }

var item = new Item('IPhone', 'Apple');
console.log(item.getInfo());


// class keyword

class Vehicle {
    constructor(name, maker, engine) {
        this.name = name;
        this.maker = maker;
        this.engine = engine;
    }
}

let car1 = new Vehicle('Fiesta', 'Ford');
let car2 = new Vehicle('Santa Fe', 'Hyundai');

console.log(car1.name); 
console.log(car2.name); 

// Object constructor

var book = new Object();

book.name = "Five Weeks in a Balloon",
book.getName = function() {
  return this.name ; 
};

console.log(book.getName());
