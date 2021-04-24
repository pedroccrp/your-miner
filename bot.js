const Discord = require('discord.js');

const { prefix } = require('./config');
const messageHandler = require('./utils/messageHandler');

const bot = new Discord.Client();

bot.on('ready', () => {
  console.log('Logged in as %s - %s\n', bot.user.username, bot.user.id);
});

bot.on('message', (message) => {
  if (message.author.bot || !message.content.startsWith(prefix)) {
    return;
  }

  const { command, arguments } = messageHandler.separateCommandAndArguments(
    message,
  );

  message.reply(
    `You asked me to '${command}' with these [${arguments}] arguments?`,
  );
});

module.exports = bot;
