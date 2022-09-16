"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Employee_1 = __importDefault(require("./Employee"));
class HR extends Employee_1.default {
    job() {
        return "Do the paper work and calculate salary of all employee";
    }
}
exports.default = HR;
//# sourceMappingURL=HR.js.map