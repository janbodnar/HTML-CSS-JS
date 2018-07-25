var x = 1;
let y = 1;

{
    var x = 2;
    let y = 2;
    console.log("Inside block");
    console.log(x);
    console.log(y);
    
}

console.log("Outside block");
console.log(x); 
console.log(y); 
