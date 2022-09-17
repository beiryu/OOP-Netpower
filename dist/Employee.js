"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Role_1 = require("./types/Role");
const Gender_1 = require("./types/Gender");
class Employee {
    constructor(_id = 0, _name = "", _age = 0, _salary = 0, _gender = Gender_1.Gender.Male, _role = Role_1.Role.Member) {
        this._id = _id;
        this._name = _name;
        this._age = _age;
        this._salary = _salary;
        this._gender = _gender;
        this._role = _role;
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
        return ("Id: " +
            this._id +
            "\nName: " +
            this._name +
            "\nAge: " +
            this._age +
            "\nGender: " +
            this._gender +
            "\nRole: " +
            this._role +
            "\nJob: " +
            this.job() +
            "\nSalary: " +
            salaryReturn);
    }
}
exports.default = Employee;
//# sourceMappingURL=Employee.js.map