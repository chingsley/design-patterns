// let accounts = [];
const accounts = Symbol("accounts");
const findAccount = Symbol("findAccount");

class Bank {
  constructor() {
    this[accounts] = [];
  }

  [findAccount](name) {
    return this[accounts].find(acc => acc.name === name);
  }
  createAccount(name, monies = 0) {
    const account = this[findAccount](name);
    if (account) console.log("The account already exists");

    this[accounts].push({
      name,
      monies
    });
  }

  credit(name, amount) {
    const account = this[findAccount](name);
    if (!account) return;

    account.monies += amount;
  }

  getFunds(name) {
    const account = this[findAccount](name);
    if (!account) return "Account not found!";

    return account.monies;
  }
}

module.exports = new Bank();