import Employee from "./Employee";

export default class Leader extends Employee {
  job(): string {
    return "Review code and manage team";
  }
}
