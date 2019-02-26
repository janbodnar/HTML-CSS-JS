// JS properties are mutable; we can delete, modify and insert
// properties into JS objects

const student = {
    name: 'Bruce',
    score: 98,
    grade: 'A'
}

console.log(student);

console.log(student.score = 99);
console.log(student);

delete student.grade;
console.log(student);

student.grade = 'A+'
console.log(student);
