
const person = {
    firstName: "Bruce",
    age: 27,
    favouriteColour: "blue"
};

console.log(person);

delete person.favouriteColour; 
console.log(person);

delete person['age'];
console.log(person);
