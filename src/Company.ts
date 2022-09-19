import { Role } from "./types/Role";

import Employee from "./Employee";

export default class Company {

  private static _onlyInstance: Company;

  private _employees: Employee[] = [];

  private constructor() {}

  static getInstance(): Company {
    return (this._onlyInstance) ? this._onlyInstance : new Company();
  }

  get employees(): Employee[] {
    return this._employees;
  }

  set employees(value: Employee[]) {
    this._employees = value;
  }

  private isIdExist(id: number): boolean {
    return !!this._employees.find(e => e.id == id);
  }

  private isHR(id: number): boolean {
    return !!this._employees.find(e => e.id == id  && e.role == Role.HR);
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
    this._employees = this._employees.filter(e => e.id != id);
  }

  showInfo(id?: number) {
    if (this.isEmpty()) throw new Error("Company have no anyone!");
    this._employees.forEach(e => {
      let canViewSalary: boolean = (id && !!this.isHR(id)) || e.id == id; 
      console.log(e.info(canViewSalary));
    })
  }

  countEmployee<T>(key: T): number {
    let count: number = 0;
    this._employees.forEach(e => {
      if (e.gender == key) count++;
    })
    return count;
  }
}