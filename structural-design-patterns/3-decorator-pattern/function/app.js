require('dotenv').config();

const CurrencyConverter = require("./CurrencyConverter");

const Cost = (qty, price) => Promise.resolve(qty * price);
Cost(20, 5).then(result => console.log(result));

const CostPlus = CurrencyConverter(Cost);
CostPlus(20, 5, "NGN", "USD").then(result => console.log(result));