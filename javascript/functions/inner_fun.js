
let x = 1;

console.log(x);

function f1() { 

    let x = 5;
    console.log(x);

    function f2() {

        let x = 8;
        console.log(x);    
    }

    f2();
}

f1();
