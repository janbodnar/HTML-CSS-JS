const nums = [2, 3, 1, 6, 5, 8, 9, 0];

nums.sort();
console.log(nums);

nums.reverse();
console.log(nums);

const persons = [
    {name: 'Peter', age: 21},
    {name: 'Robert', age: 37},
    {name: 'Martin', age: 45},
    {name: 'Jane', age: 31}
];

persons.sort((a, b) => a.age - b.age);
console.log(persons);

persons.sort((a, b) => {
    
    const nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
    
    if (nameA < nameB) {
        return -1;
    } else if (nameA > nameB) {
        return 1;
    } else {
        return 0;
    }
});

console.log(persons);
