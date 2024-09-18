import chalk from "chalk";
import promptSync from "prompt-sync";
const prompt = promptSync();

export default class Status {
    constructor(status) { 
        this.status = status;
        this.ask_status = prompt(chalk.yellow("Want to play again?(yes/no) "));
            if (this.ask_status === "yes" || this.ask_status === "y") {
                this.status = true;
            } else {
                console.info("Goodbye!")
                this.status = false;
            }   
    }
}