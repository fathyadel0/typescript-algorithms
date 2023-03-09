"use strict";
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
function print(value) {
    return value;
}
const data = print(new User("stefan", 23));
console.log(data);
