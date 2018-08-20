let words = ['a gray bird', 'grey hair', 'great look'];

let pattern = /gr[ea]y/;

words.forEach(word => {

    if (pattern.test(word)) {

        console.log(`${word}`);
    }
});
