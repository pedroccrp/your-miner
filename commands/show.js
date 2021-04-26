const cryptocurrency = require('../utils/cryptocurrency');

module.exports = async arguments => {
  if (arguments.length === 0) {
    return {
      reply: 'Please say what currency you want!',
    };
  }

  const currency = arguments[0];

  const value = await cryptocurrency.getCurrencyData(currency);

  return {
    reply: `Value of coin is ${value}.`,
  };
};
