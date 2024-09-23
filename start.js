import chalk from "chalk";
import Info from "./components/Info.js";
import InputCheck from "./components/InputCheck.js";
import RandomMove from "./components/RandomMove.js";
import HMAC from "./components/HMAC.js";
import Query from "./components/Query.js";
import Status from "./components/Status.js";


let info = new Info;
info.showHeader();
let input_options = process.argv.slice(2);
let status = true;
while (status) {
    let Options = new InputCheck(input_options);
    input_options = [];
    let pcMove = new RandomMove(0, Options.length).result;
    let hmac = new HMAC(Options[pcMove]);
    console.log();

    console.info(chalk.blueBright.bold(`HMAC: ${hmac.showHMAC()}`))
    console.log();

    console.info(chalk.greenBright("Choose your option: "));
    for (let i = 0; i < Options.length; i++) {
        console.info(`${i+1} - ${Options[i]}`);
    }
    console.info(chalk.magentaBright("? - Help"));
    console.info(chalk.redBright("0 - Exit"));
    console.log();

    let query = new Query(Options, pcMove);
    console.log();

    console.info(chalk.blueBright.bold(`HMAC key: ${hmac.showKEY()}`));
    console.log();

    info.showFooter();

    status = new Status(status).status;
}