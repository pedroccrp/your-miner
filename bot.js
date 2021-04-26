const Discord = require('discord.js');

const { prefix } = require('./config');
const messageHandler = require('./utils/messageHandler');
const commandHandler = require('./utils/commandHandler');

const bot = new Discord.Client();

bot.on('ready', () => {
  console.log('Logged in as %s - %s\n', bot.user.username, bot.user.id);
});

bot.on('message', async message => {
  if (message.author.bot || !message.content.startsWith(prefix)) {
    return;
  }

  const { command, arguments } = messageHandler.separateCommandAndArguments(
    message,
  );

  await commandHandler.handleCommand(message, command, arguments);
});

module.exports = bot;
