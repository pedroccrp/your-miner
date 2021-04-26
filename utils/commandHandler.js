const config = require('../config');
const commands = require('../commands/commands');

const { prefix } = config;

const errorMessage = usedCommand => {
  return `I don't know this '${usedCommand}' command, try ${prefix}help to get a list of available commands!`;
};

const commandHandler = {
  handleCommand: async (message, commandString, arguments) => {
    if (commandString === '') {
      return;
    }

    const command = commands[commandString];

    if (!command) {
      message.reply(errorMessage(commandString));
      return;
    }

    const { reply } = await command(arguments);

    if (reply) {
      message.reply(reply);
    }
  },
};

module.exports = commandHandler;
