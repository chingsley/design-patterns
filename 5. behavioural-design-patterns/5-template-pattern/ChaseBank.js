const Bank = require('./Bank');

class ChaseBank extends Bank {
  constructor() {
    super();
  }
  processCredit(name, amount) {
    const account = this._getAccount(name);
    if (account) {
      account.funds = account.funds + amount;
    } else {
      console.log('Account not found!');
    }
  }
  processDebit(name, amount) {
    const account = this._getAccount(name);
    if (account) {
      const remainingBalance = account.funds - amount;
      account.funds = remainingBalance <= 0 ? account.funds : remainingBalance;
    } else {
      console.log('Account not found!');
    }
  }
}

module.exports = ChaseBank;
