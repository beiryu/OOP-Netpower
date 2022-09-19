"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Role_1 = require("./types/Role");
const Gender_1 = require("./types/Gender");
class Employee {
    constructor() {
        this._id = 0;
        this._name = "";
        this._age = 0;
        this._salary = 0;
        this._gender = Gender_1.Gender.Male;
        this._role = Role_1.Role.Member;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get salary() {
        return this._salary;
    }
    set salary(value) {
        this._salary = value;
    }
    get gender() {
        return this._gender;
    }
    set gender(value) {
        this._gender = value;
    }
    get role() {
        return this._role;
    }
    set role(value) {
        this._role = value;
    }
    info(canSeeSalary) {
        let salaryReturn = canSeeSalary ? this._salary : "Not permit";
        return `Id: ${this._id} \nName: ${this._name}, Age: ${this._age}, Gender: ${this._gender}, Role: ${this._role} \nSalary: ${salaryReturn}`;
    }
}
exports.default = Employee;
//# sourceMappingURL=Employee.js.map