import { createRequire } from "module";
const require = createRequire(import.meta.url);

const { sha3_256 } = require("js-sha3");
import secureRandom from "secure-random";

export default class HMAC {
    constructor(move) {
        this.move = move;
        this.random_digits = secureRandom(32, {type: "Array"}).join('');
    }
    showKEY() {
        let key_hash = sha3_256.create();
        key_hash.update(this.random_digits);
        let KEY = key_hash.hex();
        return KEY;
    }
    showHMAC() {
        let HMAC_hash = sha3_256.create();
        HMAC_hash.update(this.showKEY() + this.move);
        let HMAC = HMAC_hash.hex();
        return HMAC;
    }
}