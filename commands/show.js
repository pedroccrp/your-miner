const cryptocurrency = require('../utils/cryptocurrency');

module.exports = async arguments => {
  if (arguments.length === 0) {
    return {
      reply: 'Please say what currency you want!',
    };
  }

  const currency = arguments[0];

  const currencyInfo = await cryptocurrency.getCurrencyData(currency);

  if (!currencyInfo) {
    return {
      reply: `Currency not implement or not found!`,
    };
  }

  return {
    reply: `
    Value: ${currencyInfo.value} ${currencyInfo.valueCurrency}
    Fluctuation (Day): ${currencyInfo.dayChange.replace(/\s/g, '')}
    Min (Day): ${currencyInfo.dayMin.replace(/\s/g, '')}
    Max (Day): ${currencyInfo.dayMax.replace(/\s/g, '')}`,
  };
};
