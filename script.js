"use strict";
// interface Person {
//   name: string;
//   age: number;
var Person = /** @class */ (function () {
    function Person(name) {
        this.age = 30;
        this.name = name;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + " " + this.name);
    };
    return Person;
}());
var user1 = new Person("Rakib");
user1.greet("Hello");
var addNumber = function (num1, num2) {
    return num1 + num2;
};
