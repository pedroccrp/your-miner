const fetch = require('node-fetch');
const cheerio = require('cheerio');

const webpageUrl = 'https://www.infomoney.com.br/cotacoes/ethereum-eth/';

const selectors = {
  value: 'div[class="value"] p',
  valueCurrency: 'div[class="value"] label',
  dayChange: 'div[class="percentage"] p',
  dayMin: 'div[class="minimo"] p',
  dayMax: 'div[class="maximo"] p',
};

const getInfo = async () => {
  const response = await fetch(webpageUrl);
  const htmlText = await response.text();

  const cheerioProcess = cheerio.load(htmlText);

  const resultInfo = {};

  for (attribute of Object.keys(selectors)) {
    resultInfo[attribute] = cheerioProcess(selectors[attribute]).text();
  }

  return resultInfo;
};

module.exports = {
  getInfo,
};
