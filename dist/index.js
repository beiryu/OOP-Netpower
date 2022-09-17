"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt = require("prompt-sync")();
const Gender_1 = require("./types/Gender");
const Role_1 = require("./types/Role");
const EmployeeFactory_1 = __importDefault(require("./EmployeeFactory"));
const Company_1 = __importDefault(require("./Company"));
const Checker_1 = __importDefault(require("./Checker"));
let company = Company_1.default.getInstance();
do {
    console.log("MENU.");
    console.log("0. Exit");
    console.log("1. Input newcomer");
    console.log("2. Remove the employee");
    console.log("3. Show all leader, member and HR of company and their job ");
    console.log("4. See the salary of any employee");
    console.log("5. Show total of leader, member and HR in the company");
    console.log("6. Show total male (female) of the company");
    var input = Number(prompt("Choose: "));
    if (input)
        switch (input) {
            case 0:
                break;
            case 1:
                let role = prompt("Role (0. Member, 1. Leader, 2. HR): ");
                let id = prompt("Id: ");
                let name = prompt("Name: ");
                let age = prompt("Age: ");
                let salary = prompt("Salary: ");
                let gender = prompt("Gender (0. Male, 1. Female): ");
                Checker_1.default.isRoleExist(role);
                Checker_1.default.isGenderExist(gender);
                Checker_1.default.numberValid([id, age, salary]);
                let employee = EmployeeFactory_1.default.getEmployee(Number(role));
                employee.name = name;
                employee.id = parseInt(id);
                employee.age = parseInt(age);
                employee.salary = parseInt(salary);
                employee.gender = gender == 0 ? Gender_1.Gender.Male : Gender_1.Gender.Female;
                employee.role =
                    role == 0 ? Role_1.Role.Member : role == 1 ? Role_1.Role.Leader : Role_1.Role.HR;
                company.addEmployee(employee);
                break;
            case 2:
                company.showInfo();
                let nthUser = prompt("Enter id User We want to delete: ");
                Checker_1.default.numberValid([nthUser]);
                company.deleteEmployee(nthUser);
                break;
            case 3:
                company.showInfo();
                break;
            case 4:
                let urId = prompt("Enter your Id: ");
                Checker_1.default.numberValid([urId]);
                company.showInfo(urId);
                break;
            case 5:
                console.log("N.of Member: ", company.countEmployeeByType(Role_1.Role.Member));
                console.log("N.of Leader: ", company.countEmployeeByType(Role_1.Role.Leader));
                console.log("N.of HR: ", company.countEmployeeByType(Role_1.Role.HR));
                break;
            case 6:
                console.log("N.of Male: ", company.countEmployeeByGender(Gender_1.Gender.Male));
                console.log("N.of Female: ", company.countEmployeeByGender(Gender_1.Gender.Female));
                break;
            default:
                console.log("The number is not in the list");
                break;
        }
    else
        break;
} while (input != 0);
//# sourceMappingURL=index.js.map