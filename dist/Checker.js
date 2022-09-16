"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Role_1 = require("./types/Role");
const Gender_1 = require("./types/Gender");
class Checker {
    static isNum(str) {
        return !isNaN(parseInt(str));
    }
    static isNonNegativeNum(str) {
        return this.isNum(str) && parseInt(str) >= 0;
    }
    static isGenderExist(index) {
        if (index in Gender_1.Gender === false)
            throw new Error("Gender is not exist!");
    }
    static isRoleExist(index) {
        if (index in Role_1.Role === false)
            throw new Error("Role is not exist!");
    }
    static numberValid(arrNumber) {
        for (let n of arrNumber) {
            if (!this.isNonNegativeNum(n))
                throw new Error("Input must be a non negative number!");
        }
    }
}
exports.default = Checker;
//# sourceMappingURL=Checker.js.map