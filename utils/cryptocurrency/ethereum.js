const fetch = require('node-fetch');
const cheerio = require('cheerio');

const webpageUrl = 'https://www.infomoney.com.br/cotacoes/ethereum-eth/';
const selector = 'div[class="value"] p';

const getValue = async () => {
  const response = await fetch(webpageUrl);
  const htmlText = await response.text();

  const cheerioProcess = cheerio.load(htmlText);

  const value = cheerioProcess(selector).text();

  console.log(value);

  return value;
};

module.exports = {
  webpageUrl,
  getValue,
};
