const program = require("commander");
const mypackage = require('../package.json');

program
  .version(mypackage.version, '-v, --version')
  .parse(process.argv);

console.log("redux-smith");
