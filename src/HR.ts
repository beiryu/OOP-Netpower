import Employee from "./Employee";

export default class HR extends Employee {
  job(): string {
    return "Do the paper work and calculate salary of all employee";
  }
}
