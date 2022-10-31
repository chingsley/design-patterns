const Till1 = require('./CashRegister');
const Till2 = require('./CashRegister');

Till1.credit(25);
Till1.credit(35);

console.log(`Total amount in Till2 = ${Till2.total()}`); // prints 60

Till1.debit(5);
console.log(`Total amount in Till2 = ${Till2.total()}`); // prints 60
