import { Role } from "./types/Role";
import { Gender } from "./types/Gender";

export default class Checker {
  static isNum(str: string): boolean {
    return !isNaN(parseInt(str));
  }

  static isNonNegativeNum(str: string): boolean {
    return this.isNum(str) && parseInt(str) >= 0;
  }

  static isGenderExist(index: number): void {
    if (index in Gender === false) throw new Error("Gender is not exist!");
  }

  static isRoleExist(index: number): void {
    if (index in Role === false) throw new Error("Role is not exist!");
  }

  static numberValid(arrNumber: any[]): void {
    for (let n of arrNumber) {
      if (!this.isNonNegativeNum(n))
        throw new Error("Input must be a non negative number!");
    }
  }
}
