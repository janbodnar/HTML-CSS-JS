let text = 'We met in 2013. She must be now about 27 years old.';

let pattern = /\d+/g;

while ((found = pattern.exec(text)) !== null) {

    console.log(`found ${found} at index ${found.index}`);
}
