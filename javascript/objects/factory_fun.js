// A factory function produces objects
 
const dogFactory = (name, age, breed) => {
    return {
        name: name,
        age: age,
        breed: breed,
        bark() {
            return 'Woof!'
        }
    };
};

let dog = dogFactory('Max', 4, 'dalmatian');

console.log(dog.bark());
console.log(dog);
