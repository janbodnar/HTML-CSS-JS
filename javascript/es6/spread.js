// es6, ES2015

/* spread operator allows an iterable such as an 
array expression or string to be expanded in 
places where zero or more arguments (for function calls) 
or elements (for array literals) are expected, or an object 
expression to be expanded in places where zero or more 
key-value pairs (for object literals) are expected. */

var n1 = [1, 2, 3, 4];
var n2 = [...n1, 5, 6, 7, 8];

console.log(n2);

var func = (a1, a2, a3, a4) => {

    console.log(a1);
    console.log(a2);
    console.log(a3);
    console.log(a4);
}

func(...n1);
