const axios = require('axios');


const CurrencyConverter = fn => {
  return async function (qty, price, base, to) {
    const result = await fn(qty, price); // Call the original function
    try {
      const currencyRate = await axios(`https://free.currencyconverterapi.com/api/v6/convert?q=${to.toUpperCase()}_${base.toUpperCase()}&compact=y&apiKey=${process.env.CURRENCY_CONVERTER_API_KEY}`);
      // console.log(currencyRate.data, currencyRate.data[`${to.toUpperCase()}_${base.toUpperCase()}`]['val'], result);
      return (currencyRate.data[`${to.toUpperCase()}_${base.toUpperCase()}`]['val'] * result);
    } catch (err) {
      console.log(err.response.data);
    }
  };
};


module.exports = CurrencyConverter;
