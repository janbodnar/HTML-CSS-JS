let emails = ["luke@gmail.com", "andy@yahoocom",
    "34234sdfa#2345", "f344@gmail.com"];

let pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,18}$/;

emails.forEach(email => {
    if (pattern.test(email)) {

        console.log(`${email} matches`);
    } else {
        
        console.log(`${email} does not match`);
    }
})
