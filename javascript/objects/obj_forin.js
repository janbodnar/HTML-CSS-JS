// for in loop iterates over 
// object properties

let phone = {
    brand: 'Samsung',
    model: 'Samsung Galaxy J4'
};

for (let key in phone) {
    console.log(`${key}: ${phone[key]}`);
}
