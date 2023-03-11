"use strict";
function duplicateCount(text) {
    let letters = new Set();
    const lettersArray = text.split("").map((letter) => {
        return letter.toLowerCase();
    });
    const duplicatedLetters = lettersArray.filter((letter) => {
        return lettersArray.lastIndexOf(letter) > lettersArray.indexOf(letter);
    });
    duplicatedLetters.forEach((letter) => {
        letters.add(letter);
    });
    return letters.size;
}
const count = duplicateCount("aA11");
console.log(count);
