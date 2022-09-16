import { Gender } from "./types/Gender";
import { Role } from "./types/Role";

import Employee from "./Employee";

export default class Company {

  private static _onlyInstance: Company;

  private _employees: Employee[] = [];

  private constructor() {}

  static getInstance(): Company {
    if (this._onlyInstance == null) {
      this._onlyInstance = new Company();
    }
    return this._onlyInstance;
  }

  get employees(): Employee[] {
    return this._employees;
  }

  set employees(value: Employee[]) {
    this._employees = value;
  }

  private isIdExist(id: number): boolean {
    for (let employee of this.employees) {
      if (employee.id == id) return true;
    }
    return false;
  }

  private isHR(id: number): boolean {
    for (let employee of this._employees) {
      if (employee.id == id && employee.role == Role.HR) return true;
    }
    return false;
  }

  private isEmpty(): boolean {
    return this._employees.length == 0;
  }

  addEmployee(employee: Employee) {
    if (this.isIdExist(employee.id)) throw new Error("Id exists in Company");
    this._employees.push(employee);
  }

  deleteEmployee(id: number) {
    if (!this.isIdExist(id)) throw new Error("The id is not exist!");
    this._employees = this._employees.filter((e) => {
      return e.id != id;
    });
  }

  showInfo(id?: number) {
    if (this.isEmpty()) throw new Error("Company have no anyone!");
    for (let employee of this._employees) {
      console.log(
        employee.info(employee.id == id || (id && this.isHR(id)) ? true : false)
      );
      console.log("-------------");
    }
  }

  countEmployeeByType(role: Role): number {
    let count: number = 0;
    for (let employee of this._employees) {
      if (employee.role == role) count++;
    }
    return count;
  }

  countEmployeeByGender(gender: Gender): number {
    let count: number = 0;
    for (let employee of this._employees) {
      if (employee.gender == gender) count++;
    }
    return count;
  }
}