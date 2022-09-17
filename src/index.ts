export {};
const prompt = require("prompt-sync")();

import { Gender } from "./types/Gender";
import { Role } from "./types/Role";

import EmployeeFactory from "./EmployeeFactory";
import Company from "./Company";
import Checker from "./Checker";

let company: Company = Company.getInstance();

do {
  console.log("MENU.");
  console.log("0. Exit");
  console.log("1. Input newcomer");
  console.log("2. Remove the employee");
  console.log("3. Show all leader, member and HR of company and their job ");
  console.log("4. See the salary of any employee");
  console.log("5. Show total of leader, member and HR in the company");
  console.log("6. Show total male (female) of the company");
  console.log("-----------------------------------------------");

  var input = Number(prompt("Choose: "));
  if (input)
    switch (input) {
      case 0:
        break;

      case 1:
        let id = prompt("Id: ");
        let name = prompt("Name: ");
        let age = prompt("Age: ");
        let salary = prompt("Salary: ");
        let gender = prompt("Gender (0. Male, 1. Female): ");
        let role = prompt("Role (0. Member, 1. Leader, 2. HR): ");

        Checker.isRoleExist(role);
        Checker.isGenderExist(gender);
        Checker.numberValid([id, age, salary]);

        let employee = EmployeeFactory.getEmployee(Number(role));

        employee.name = name;
        employee.id = parseInt(id);
        employee.age = parseInt(age);
        employee.salary = parseInt(salary);
        employee.gender = gender == 0 ? Gender.Male : Gender.Female;
        employee.role =
          role == 0 ? Role.Member : role == 1 ? Role.Leader : Role.HR;
        company.addEmployee(employee);
        break;

      case 2:
        company.showInfo();
        let nthUser = prompt("Enter user's id u wanna delete: ");
        Checker.numberValid([nthUser]);
        company.deleteEmployee(nthUser);
        break;

      case 3:
        company.showInfo();
        break;

      case 4:
        let urId = prompt("Enter your Id, to see the salary: ");
        Checker.numberValid([urId]);
        company.showInfo(urId);
        break;

      case 5:
        console.log("N.of Member: ", company.countEmployeeByType(Role.Member));
        console.log("N.of Leader: ", company.countEmployeeByType(Role.Leader));
        console.log("N.of HR: ", company.countEmployeeByType(Role.HR));
        break;

      case 6:
        console.log("N.of Male: ", company.countEmployeeByGender(Gender.Male));
        console.log(
          "N.of Female: ",
          company.countEmployeeByGender(Gender.Female)
        );
        break;

      default:
        console.log("The number is not in the list");
        break;
    }
  else break;
} while (input != 0);
