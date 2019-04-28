const program = require("commander");

program
  .version('0.0.10', '-v, --version')
  .parse(process.argv);

console.log("redux-smith");
