"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CipherDecipher = void 0;
class CipherDecipher {
    constructor(firstLetter, lastLetter, shift) {
        this.firstLetter = firstLetter;
        this.lastLetter = lastLetter;
        this.shift = shift;
        this.firstLetter = 'a'.charCodeAt(0);
        this.lastLetter = 'z'.charCodeAt(0);
        this.keyLenght = this.lastLetter - this.firstLetter + 1;
    }
}
exports.CipherDecipher = CipherDecipher;
