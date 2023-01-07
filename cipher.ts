const firstLetter: number = 'a'.charCodeAt(0);
const lastLetter: number = 'z'.charCodeAt(0);

function shiftCipher(cipher: string, shift: number = 1): string {
    return cipherTransition(cipher, shift);
}

function shiftDecipher(cipher: string, shift: number = 1): string {
    return cipherTransition(cipher, -shift);
}

function cipherTransition(cipher: string, shift: number): string {
    shift = shift % (lastLetter - firstLetter);
    const cipherArray = cipher.split('');
    cipherArray.forEach((letter: string, index: number, array: string[]) => {
        let codeAscii = letter.charCodeAt(0);
        if(codeAscii >= firstLetter && codeAscii <= lastLetter) {
            codeAscii = codeAscii + shift;
            if(codeAscii > lastLetter) {
                codeAscii = firstLetter + (codeAscii - lastLetter);
            } else if (codeAscii < firstLetter) {
                codeAscii = lastLetter - (firstLetter - codeAscii);
            }
            array[index] = String.fromCharCode(codeAscii);
        }
    })

    return cipherArray.join('');
}

const message: string = 'Abdg132';
const shift: number = 105; // 105 % 25 = 5;
const shiftCipherResult: string = shiftCipher(message, shift);
const shiftDecipherResult: string = shiftDecipher(shiftCipherResult, shift);
const shiftCipherResultDefault: string = shiftCipher(message); // Shift default = 1;
const shiftDecipherResultDefault: string = shiftDecipher(shiftCipherResultDefault);

console.log('Message ', message, shift, lastLetter-firstLetter);
console.log(`Ciphered message with shift = ${shift}: `, shiftCipherResult);
console.log(`Deciphered message  with shift = ${shift}: `, shiftDecipherResult);
console.log('Ciphered message with default shift: ', shiftCipherResultDefault);
console.log('Deciphered message with default shift: ', shiftDecipherResultDefault);