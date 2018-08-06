const people = [
    { name: 'John', age: 25 },
    { name: 'Andrew', age: 43 },
    { name: 'Peter', age: 81 },
    { name: 'Anna', age: 43 },
    { name: 'Adam', age: 47 },
    { name: 'Robert', age: 72 }
];

// sorting by age

let sortedByAge = people.sort((a, b) => {
    return a.age - b.age;
});

console.log(sortedByAge);

// sorting by name

let sortedByName = people.sort((a, b) => {
    return a.name.localeCompare(b.name);
});

console.log(sortedByName);
