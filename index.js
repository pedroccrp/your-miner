const bot = require('./bot');
const dotenv = require('dotenv');

dotenv.config({
  path: './.env',
});

bot.login(process.env.DISCORD_TOKEN);
