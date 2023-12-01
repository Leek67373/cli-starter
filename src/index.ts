import minimist from "minimist";
import { version, name } from "../package.json";

const argv = minimist(process.argv.slice(2));

const command = argv["_"];

function run() {
    if (
      command.length === 0 &&
      (argv.version || argv.v)
    ) {
      console.log(`name v${version}`);
      return
    }
  
    if (command.length === 0 && argv.help) {
      console.log(`例子： `);
      return
    }
  
    if (command.includes("init")) {
      console.log("init");
      return
    }
  
    if (command.length === 0) {
        console.log("command");
        return
    }
  
    console.log('没有对应的命令');
  }
  
  run()
