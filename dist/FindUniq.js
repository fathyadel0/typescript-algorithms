"use strict";
function findUniq(arr) {
    const array = arr.sort();
    return array[0] == array[1] ? array[array.length - 1] : array[0];
}
const uniqueNumber = findUniq([1, 1, 2, 1, 1, 1]);
console.log(uniqueNumber);
