const people = [
    { name: 'John', age: 25 },
    { name: 'Andrew', age: 43 },
    { name: 'Peter', age: 81 },
    { name: 'Anna', age: 43 },
    { name: 'Adam', age: 47 },
    { name: 'Robert', age: 72 }
];

var filtered = people.filter((person) => { return person.age > 50 });
console.log(filtered);
