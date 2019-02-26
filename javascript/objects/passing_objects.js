// integers are passed by value, 
// objects by reference

const num = 7;
const obj = { color: 'steelblue' };

const modify = (num, obj) => {
    num = 7;
    obj.color = 'blue';
};

modify(num, obj);

console.log(num);
console.log(obj.color);
