"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        // private name:string;
        this.subjects = [];
        // this.name = name;
    }
    Department.createEmployee = function (name) {
        return { name: name };
    };
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
// super(); when you use your own constructor which is inherit from another class you have to use super() keyword. And this super() calls the main constructor.
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, name, admins) {
        var _this = _super.call(this, id, name) || this;
        _this.admins = admins;
        return _this;
    }
    return ITDepartment;
}(Department));
var computer = new ITDepartment(66, "computer", ["sakil"]);
computer.addSubjects("Data structure and algorithm");
computer.addSubjects("Computer");
computer.showSubjects();
computer.describe();
console.log(computer);
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, name, reports) {
        var _this = _super.call(this, id, name) || this;
        _this.reports = reports;
        _this.lastReports = reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReports) {
                return this.lastReports;
            }
            throw new Error("No report found. ");
        },
        set: function (value) {
            // console.log({ value });
            if (value) {
                this.addReport(value);
                return;
            }
            throw new Error("Please pass in a valid value");
        },
        enumerable: false,
        configurable: true
    });
    AccountingDepartment.prototype.addReport = function (report) {
        this.reports.push(report);
        this.lastReports = report;
    };
    AccountingDepartment.prototype.getReports = function () {
        console.log("reports: " + this.reports);
    };
    // overriding addSubjects() method.
    AccountingDepartment.prototype.addSubjects = function (subjectName) {
        if (subjectName === "Computer") {
            return;
        }
        this.subjects.push(subjectName);
    };
    return AccountingDepartment;
}(Department));
var accounting = new AccountingDepartment(88, "Accounting", []);
// console.log(accounting.mostRecentReport);
accounting.addReport("Hello this is report");
accounting.addReport("Hello this is report1");
accounting.getReports();
accounting.addSubjects("Computer");
accounting.addSubjects("Business Organization and communications");
accounting.showSubjects();
console.log(accounting.mostRecentReport);
accounting.mostRecentReport = "Test";
accounting.getReports();
var employee = Department.createEmployee("Rakib");
console.log(employee);
console.log(employee.name);
