"use strict";
var Department = /** @class */ (function () {
    function Department(n) {
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("Department: " + this.name);
    };
    return Department;
}());
var business = new Department("business");
business.describe();
var businessCopy = { name: "Computer", describe: business.describe };
businessCopy.describe();
