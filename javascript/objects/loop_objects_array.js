const people = [
    { name: 'John', age: 25 },
    { name: 'Andrew', age: 43 },
    { name: 'Peter', age: 81 },
    { name: 'Anna', age: 43 },
    { name: 'Adam', age: 47 },
    { name: 'Robert', age: 72 }
];

people.forEach((e, idx) => {
    console.log(`${idx}: ${e.name} - ${e.age}`);
});

// const anyAdult = people.some(person => person.age >= 18);
// console.log(anyAdult);  //true
//https://stackoverflow.com/questions/16626735/how-to-loop-through-an-array-containing-objects-and-access-their-properties
