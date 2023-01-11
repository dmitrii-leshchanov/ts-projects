export class CipherDecipher {
   
    private keyLenght: number;

    constructor (private firstLetter: number, private lastLetter: number, private shift: number) {
        this.firstLetter = 'a'.charCodeAt(0);
        this.lastLetter = 'z'.charCodeAt(0);
        this.keyLenght = this.lastLetter - this.firstLetter + 1;
    }

}