const coins = {
  ethereum: require('./cryptocurrency/ethereum'),
};

const getCurrencyData = async currencyString => {
  const coin = coins[currencyString];

  if (!coin) {
    return null;
  }

  value = await coin.getValue();

  console.log(value);

  return value;
};

module.exports = {
  getCurrencyData,
};
