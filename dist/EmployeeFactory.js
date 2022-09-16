"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Role_1 = require("./types/Role");
const Member_1 = __importDefault(require("./Member"));
const Leader_1 = __importDefault(require("./Leader"));
const HR_1 = __importDefault(require("./HR"));
class EmployeeFactory {
    static getEmployee(roleIndex) {
        if (roleIndex == Role_1.Role.Member)
            return new Member_1.default();
        else if (roleIndex == Role_1.Role.Leader)
            return new Leader_1.default();
        else if (roleIndex == Role_1.Role.HR)
            return new HR_1.default();
        else
            return null;
    }
}
exports.default = EmployeeFactory;
//# sourceMappingURL=EmployeeFactory.js.map