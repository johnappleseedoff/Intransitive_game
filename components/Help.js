import { createRequire } from "module";
const require = createRequire(import.meta.url);
import chalk from "chalk";
const { Table } = require("console-table-printer");

export default class Help {
    constructor(options) {
        this.options = options;
        this.table = new Table;
    }
    printHelp() {
        let i, j, r;
        let table_array = [];
        let l = this.options.length;
        for (i = 0; i < l; i++ ) {
            let obj = {"PC \\ User": this.options[i]};
            for (j = 0; j < l; j++) {
                r = LWD(i, j, l);
                obj[this.options[j]] = r;
            }
            table_array.push(obj);
        }
        this.table.addRows(table_array);
        this.table.printTable();
    }
}

function LWD(i, j, l) {
    let m = (l - 1) / 2;
    let lwd = Math.sign((i - j + m + l) % l - m);
    if (lwd < 0) {
        lwd = chalk.greenBright("Win");
    } else if (lwd > 0) {
        lwd = chalk.redBright("Loose");
    } else {
        lwd = "Draw";
    }
    return lwd;
}