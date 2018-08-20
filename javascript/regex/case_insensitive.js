let words = ['dog', 'Dog', 'DOG', 'Doggy'];

let pattern = /dog/i;

words.forEach(word => {

    if (pattern.test(word)) {

        console.log(`the ${word} matches`);
    }
});
