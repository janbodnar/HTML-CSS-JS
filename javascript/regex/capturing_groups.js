content = `<p>The <code>Pattern</code> is a compiled
representation of a regular expression.</p>`;

let pattern = /(<\/?[a-z]*>)/g;

let found = content.match(pattern);

found.forEach(tag => {

    console.log(tag);
});
