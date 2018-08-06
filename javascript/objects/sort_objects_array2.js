const people = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Andrew', lastName: 'Phillips' },
    { firstName: 'Peter', lastName: 'Gonda' },
    { firstName: 'Anna', lastName: 'Malin' },
    { firstName: 'Adam', lastName: 'Smith' },
    { firstName: 'Andrew', lastName: 'Robertson' },
    { firstName: 'John', lastName: 'Smith' },
    { firstName: 'Eva', lastName: 'Green' },
    { firstName: 'John', lastName: 'Green' },
    { firstName: 'Robert', lastName: 'Blake' }
];

let sorted = people.sort((left, right) => {
    var lastNameOrder = left.lastName.localeCompare(right.lastName);
    var firstNameOrder = left.firstName.localeCompare(right.firstName);
    return lastNameOrder || firstNameOrder;
});

console.log(sorted);
