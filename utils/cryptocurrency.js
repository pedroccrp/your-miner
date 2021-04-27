const coins = {
  ethereum: require('./cryptocurrency/ethereum'),
};

const getCurrencyData = async currencyString => {
  const coin = coins[currencyString];

  if (!coin) {
    return null;
  }

  info = await coin.getInfo();

  return info;
};

module.exports = {
  getCurrencyData,
};
