const ChaseBank = require('./ChaseBank');

const chaseBank = new ChaseBank();

const name = 'John Doe';
chaseBank.createAccount(name, 1000);
chaseBank.credit(name, 500);
chaseBank.debit(name, 250);
chaseBank.view(name);
