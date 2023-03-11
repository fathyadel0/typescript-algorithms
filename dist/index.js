"use strict";
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get counter() {
        return User._counter;
    }
    get data() {
        return `${this.name} is ${this.age} years old....`;
    }
    decrement(value) {
        User._counter -= value;
    }
    increment(value) {
        User._counter += value;
    }
}
User._counter = 0;
class Professor extends User {
    constructor(id, name, age) {
        super(name, age);
        this.id = id;
    }
    get data() {
        return `Professor ${super.data}`;
    }
}
const user = new Professor("123", "stefan", 23);
console.log(user.data);
