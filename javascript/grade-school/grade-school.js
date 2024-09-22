//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    this._roster = {};
  }
  roster() {
    let res = {};
    for (const name of Object.keys(this._roster)) {
      const identifier = this._roster[name];
      if (!res[identifier]) res[identifier] = [];
      res[identifier].push(name);
    }
    for (const students of Object.values(res)) students.sort();
    return res;
  }

  add(name, identifier) {
    this._roster[name] = identifier;
  }

  grade(identifier) {
    let students = [];
    for (const name of Object.keys(this._roster)) {
      if (this._roster[name] === identifier) {
        students.push(name);
      }
    }
    return students.sort();
  }
}
