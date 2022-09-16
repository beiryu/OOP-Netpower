import { Role } from "./types/Role";
import { Gender } from "./types/Gender";

export default abstract class Employee {
  constructor(
    protected _id: number = 0,
    protected _name: string = "",
    protected _age: number = 0,
    protected _salary: number = 0,
    protected _gender: Gender = Gender.Male,
    protected _role: Role = Role.Member
  ) {}

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }
  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    this._salary = value;
  }
  get gender(): Gender {
    return this._gender;
  }

  set gender(value: Gender) {
    this._gender = value;
  }

  get role(): Role {
    return this._role;
  }

  set role(value: Role) {
    this._role = value;
  }

  abstract job(): string;

  info(canSeeSalary?: boolean | undefined): string {
    let salaryReturn = canSeeSalary ? this._salary : "Not permit";
    return (
      "Id: " +
      this._id +
      "\nName: " +
      this._name +
      "\nAge: " +
      this._age +
      "\nGender: " +
      this._gender +
      "\nRole: " +
      this._role +
      "\nJob: " +
      this.job() +
      "\nSalary: " +
      salaryReturn
    );
  }
}
