import commander from "commander";
import mypackage from "../package.json"

commander
  .version(mypackage.version, '-v, --version')
  .parse(process.argv);

console.log("redux-smith");
