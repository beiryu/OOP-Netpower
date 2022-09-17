import { Role } from "./types/Role";

import Employee from "./Employee";
import Member from "./Member";
import Leader from "./Leader";
import HR from "./HR";

export default class EmployeeFactory {
  static getEmployee(roleIndex: number): Employee {
    if (roleIndex == Role.Leader) return new Leader();
    else if (roleIndex == Role.HR) return new HR();
    else return new Member();
  }
}
