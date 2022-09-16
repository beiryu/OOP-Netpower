"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Employee_1 = __importDefault(require("./Employee"));
class Member extends Employee_1.default {
    job() {
        return "Implement feature";
    }
}
exports.default = Member;
//# sourceMappingURL=Member.js.map