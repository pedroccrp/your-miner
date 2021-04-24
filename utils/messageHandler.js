const { prefix } = require('../config');

const messageHandler = {
  separateCommandAndArguments: (message) => {
    const bruteContent = message.content;
    const cleanContent = bruteContent.slice(prefix.length);

    const arguments = cleanContent.split(' ');
    const command = arguments.shift().toLowerCase();

    return {
      command,
      arguments,
    };
  },
};

module.exports = messageHandler;
