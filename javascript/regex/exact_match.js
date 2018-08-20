let words = ['seven', 'even', 'prevent', 'revenge', 'maven', 
    'eleven', 'amen', 'event']

let pattern = /^even$/;

words.forEach(word => {

    if (pattern.test(word)) {

        console.log(`the ${word} matches`);
    }
});
