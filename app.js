"use strict";
function getRandomNumber(min, max) {
    return Math.trunc(min + Math.random() * (max - min + 1));
}
let min = 1;
let max = 200;
console.log(getRandomNumber(min, max));
