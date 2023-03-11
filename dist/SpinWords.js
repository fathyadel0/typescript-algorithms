"use strict";
function spinWords(words) {
    return words
        .split(" ")
        .map((word) => word.length >= 5 ? word.split("").reverse().join("") : word)
        .join(" ");
}
console.log(spinWords("This is another test"));
