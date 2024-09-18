import chalk from "chalk";
import Help from "./Help.js";
import promptSync from "prompt-sync";
const prompt = promptSync();

export default class Query {
    constructor(options, pcMove) {
        this.flag = true;
        this.pcMove = pcMove;
        this.length = options.length;
        do {
            this.query = prompt(chalk.bold("Enter your move: "));
            if (this.query == "?") {
                let help = new Help(options).printHelp();
                continue;
            } else if (this.query === "0") {
                console.info(chalk.bgRed("You chose to exit"));
                process.exit(0);
            }    
            this.query = parseInt(this.query);
            if (this.query > this.length || this.query < 0 || this.query === ""|| isNaN(this.query)) {
                console.info(chalk.red.bold("You have entered a wrong move. Try again!"));
                continue; 
            } else {
                this.winner = Winner(this.query, this.pcMove, this.length);
                this.flag = false;
                console.info(`Your move: ${options[this.query - 1]}`);
                console.info(`Computer move: ${options[this.pcMove]}`);
                if (this.winner < 0) {
                    console.info(chalk.greenBright.bold("You win!"));
                } else if (this.winner > 0) {
                    console.info(chalk.redBright.bold("You lose!"));
                } else {
                    console.info(chalk.bold("You played to a draw"));
                }
            }            
        } while(this.flag);
    }
}    

function Winner(query, pcMove, length) {
    let userMove = query - 1;
    let middle = (length - 1) / 2;
    let winner = Math.sign((userMove - pcMove + middle + length) % length - middle);
    return winner;
}