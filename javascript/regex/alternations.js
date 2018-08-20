let words = ["Jane", "Thomas", "Robert",
    "Lucy", "Beky", "John", "Peter", "Andy"];

let pattern = /Jane|Beky|Robert/;

words.forEach(word => {

    if (pattern.test(word)) {

        console.log(`the ${word} matches`);
    }
});
