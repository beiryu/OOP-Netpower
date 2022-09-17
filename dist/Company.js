"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Role_1 = require("./types/Role");
class Company {
    constructor() {
        this._employees = [];
    }
    static getInstance() {
        if (this._onlyInstance == null) {
            this._onlyInstance = new Company();
        }
        return this._onlyInstance;
    }
    get employees() {
        return this._employees;
    }
    set employees(value) {
        this._employees = value;
    }
    isIdExist(id) {
        for (let employee of this.employees) {
            if (employee.id == id)
                return true;
        }
        return false;
    }
    isHR(id) {
        for (let employee of this._employees) {
            if (employee.id == id && employee.role == Role_1.Role.HR)
                return true;
        }
        return false;
    }
    isEmpty() {
        return this._employees.length == 0;
    }
    addEmployee(employee) {
        if (this.isIdExist(employee.id))
            throw new Error("Id exists in Company");
        this._employees.push(employee);
    }
    deleteEmployee(id) {
        if (!this.isIdExist(id))
            throw new Error("The id is not exist!");
        this._employees = this._employees.filter((e) => {
            return e.id != id;
        });
    }
    showInfo(id) {
        if (this.isEmpty())
            throw new Error("Company have no anyone!");
        for (let employee of this._employees) {
            console.log(employee.info(employee.id == id || (id && this.isHR(id)) ? true : false));
            console.log("-------------");
        }
    }
    countEmployeeByType(role) {
        let count = 0;
        for (let employee of this._employees) {
            if (employee.role == role)
                count++;
        }
        return count;
    }
    countEmployeeByGender(gender) {
        let count = 0;
        for (let employee of this._employees) {
            if (employee.gender == gender)
                count++;
        }
        return count;
    }
}
exports.default = Company;
//# sourceMappingURL=Company.js.map