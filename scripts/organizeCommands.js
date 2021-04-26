const fs = require('fs');

const folderPath = 'commands/';
const fileName = 'commands.js';

let files = fs.readdirSync(folderPath);

let code = '';

files = files.filter(value => value !== fileName);

code = code.concat(`module.exports = {\n`);

for (file of files) {
  moduleName = file.replace('.js', '');

  code = code.concat(`  ${moduleName}: require('./${moduleName}'),\n`);
}

code = code.concat(`};\n`);

fullPath = `${folderPath}${fileName}`;

try {
  fs.writeFileSync(fullPath, code);
} catch (err) {
  console.error(`Error writting to file '${fullPath}'! ${err}`);
}
