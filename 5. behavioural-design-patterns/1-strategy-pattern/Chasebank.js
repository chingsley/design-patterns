const Bank = require('./Bank');

class Chasebank extends Bank {
  processPayment() {
    console.log(
      `Your payment of ${this.amount} for ${this.account} has been processed by Chase`
    );
  }
  processRefund() {
    console.log(
      `Your refund of ${this.amount} for ${this.account} has been processed by Chase`
    );
  }
}

module.exports = Chasebank;
