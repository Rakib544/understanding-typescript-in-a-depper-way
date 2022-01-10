"use strict";
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        // private name:string;
        this.subjects = [];
        // this.name = name;
    }
    Department.prototype.describe = function () {
        console.log("Department(" + this.id + "): " + this.name);
    };
    Department.prototype.addSubjects = function (subjectName) {
        //   this.id = 67;
        this.subjects.push(subjectName);
    };
    Department.prototype.showSubjects = function () {
        console.log(this.subjects);
    };
    return Department;
}());
var computer = new Department(66, "computer");
computer.addSubjects("Data structure and algorithm");
computer.showSubjects();
computer.describe();
