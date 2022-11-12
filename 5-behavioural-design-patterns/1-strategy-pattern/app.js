const Payment = require('./Payment');
const Chasebank = require('./Chasebank');
const Citibank = require('./Citibank');

const payment = new Payment();

payment.pay(new Chasebank(200, '0002340112450'));
payment.pay(new Citibank(234, '0101901889181'));
payment.refund(new Chasebank(78, '00998199181'));
