"use strict";
var firstLetter = 'a'.charCodeAt(0);
var lastLetter = 'z'.charCodeAt(0);
function shiftCipher(cipher, shift) {
    if (shift === void 0) { shift = 1; }
    return cipherTransition(cipher, shift);
}
function shiftDecipher(cipher, shift) {
    if (shift === void 0) { shift = 1; }
    return cipherTransition(cipher, -shift);
}
function cipherTransition(cipher, shift) {
    shift = shift % (lastLetter - firstLetter);
    var cipherArray = cipher.split('');
    cipherArray.forEach(function (letter, index, array) {
        var codeAscii = letter.charCodeAt(0);
        if (codeAscii >= firstLetter && codeAscii <= lastLetter) {
            codeAscii = codeAscii + shift;
            if (codeAscii > lastLetter) {
                codeAscii = firstLetter + (codeAscii - lastLetter);
            }
            else if (codeAscii < firstLetter) {
                codeAscii = lastLetter - (firstLetter - codeAscii);
            }
            array[index] = String.fromCharCode(codeAscii);
        }
    });
    return cipherArray.join('');
}
var message = 'Abdg132';
var shift = 105; // 105 % 25 = 5;
var shiftCipherResult = shiftCipher(message, shift);
var shiftDecipherResult = shiftDecipher(shiftCipherResult, shift);
var shiftCipherResultDefault = shiftCipher(message); // Shift default = 1;
var shiftDecipherResultDefault = shiftDecipher(shiftCipherResultDefault);
console.log('Message ', message, shift, lastLetter - firstLetter);
console.log("Ciphered message with shift = ".concat(shift, ": "), shiftCipherResult);
console.log("Deciphered message  with shift = ".concat(shift, ": "), shiftDecipherResult);
console.log('Ciphered message with default shift: ', shiftCipherResultDefault);
console.log('Deciphered message with default shift: ', shiftDecipherResultDefault);
