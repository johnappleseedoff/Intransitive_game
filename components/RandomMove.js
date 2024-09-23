export default class RandomMove {
    constructor(min, max) {
        this.min = Math.ceil(min);
        this.max = Math.floor(max);
        this.result = Math.floor(Math.random() * (this.max - this.min) + this.min)
    }
}