import chalk from "chalk";
import promptSync from "prompt-sync";
const prompt = promptSync();

export default class InputCheck {
    constructor(input_options) {
        this.flag = false;
        while (this.flag === false) {
            this.options = firstCheck(input_options);
            if (this.options.length === 1 || this.options.length === 0) {
                printMessage("not enough");
            } else if (this.options.length % 2 == 0) {
                printMessage("even number of");
            } else if (!this.options.every(checkDuplicates)){   
                printMessage("duplicated");
            } else {
                this.flag = true;
                return this.options;
                
            }
            input_options = [];
        } 
    }
}

function firstCheck(input) {
    let options, i;
    if (input.length === 0) {
        console.log();
        input = prompt(chalk.yellow.bold("Enter your options: "));
    }
    if (typeof(input) === "string") {
        options = input.trim().split(" ");
    } else {
        options = input;
    }
    for (i = 0; i < options.length; i++) {
        if (options[i] === "" || options[i] === " ") { 
            options = options.filter(option => option != options[i]);
        }
    }
    return options;
}

function printMessage(message, standard = true) {
    console.log();
    if (standard) {
        console.info(chalk.red.bold(`You have entered ${message} options. Try again!`));
    } else {
        console.info(chalk.red.bold(message));
    }
    console.info("Example: Rock Scissors Paper or Rock Scissors Paper Lizard Spock or 1 2 3 4 5 6 7 8 9 etc");
}

function checkDuplicates(element, index, array) {
    let i;
    for (i = 0; i < array.length; i++) {
        if (index === i) {
            return true;
        } else if (element === array[i]) {
            return false;
        }
    }
}