import chalk from "chalk";

export default class Info {
    constructor() {
        this.attention = chalk.redBright.italic("The minimum number of options is 3 and oddness is mandatory!");
        this.shaCheck = "https://emn178.github.io/online-tools/sha3_256.html";
    }
    showHeader() {
        printDivider();   
        console.info(chalk.italic(
        `This is an intransitive game, like rock-scissors-paper, where you\n\
have to input an odd number of possible options. For simplicity, the rules\n\
would be explained with 3-options example: 1st option wins 2nd, 2nd wins 3rd,\n\
but 3rd wins 1st.\n\
The number of options could be more than 3, the victory is defined as follows:\n\
half of the next moves in the circle wins, half of the previous moves in\n\
the circle lose (the semantics of the strings-moves is not important).
${this.attention}`
        ));
        printDivider();
    }  
    
    showFooter() {
        printDivider("one_line");
        console.info("HMAC was calculated with SHA3-256 algorithm");
        console.info("You can check hash using HMAC key and PC move with SHA3 calculators.");
        console.info(`For example, you can use this: ${this.shaCheck}`);
        printDivider("one_line");
    }
}

function printDivider(type = "full") {
    let stars = chalk.cyanBright.italic("***    ***   ***   ***   ***   ***   ***   ***   ***   ***   ***    ***    ***");
    if (type === "full") {
        console.log();
        console.log(stars);
        console.log();
    } else if (type === "one_line") {
        console.log(stars);
    }
}

