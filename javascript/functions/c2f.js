/*
A function is a code block containing a series of statements. 
It is a good programming practice that methods do only one 
specific task. Methods bring modularity to programs. 
Proper use of methods brings the following advantages:

- reducing duplication of code
- decomposing complex problems into simpler pieces
- improving clarity of the code
- reuse of code
- Information hiding

Functions consist of:

- function name
- function parameters
- parentheses
- block of statements
*/

function celsius2Fahrenheit(c) {
    return c * 9/5 + 32;
}

console.log(celsius2Fahrenheit(100));
console.log(celsius2Fahrenheit(0));
console.log(celsius2Fahrenheit(30));
