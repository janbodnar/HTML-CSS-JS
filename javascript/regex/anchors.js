let sentences = ['I am looking for Jane.',
    'Jane was walking along the river.',
    'Kate and Jane are close friends.'];

// /Jane\.$/
let pattern = /^Jane/;

sentences.forEach(sentence => {

    if (pattern.test(sentence)) {

        console.log(`${sentence}`);
    }
});
