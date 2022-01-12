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
// // How to define function structure using interface
// interface AddFunction {
//   (number1: number, number2: number): number;
// }
// const addNumber: AddFunction = (num1: number, num2: number) => {
//   return num1 + num2;
// };
