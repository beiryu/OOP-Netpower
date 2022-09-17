"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Employee_1 = __importDefault(require("./Employee"));
class Leader extends Employee_1.default {
    job() {
        return "Review code and manage team";
    }
}
exports.default = Leader;
//# sourceMappingURL=Leader.js.map