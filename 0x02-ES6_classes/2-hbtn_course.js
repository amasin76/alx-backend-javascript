export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /* eslint-disable */
  _checkType(value, type) {
    if (type === 'array') {
      if (!Array.isArray(value)) {
        throw new TypeError('Students must be an array of strings');
      }
    } else if (typeof value !== type) {
      throw new TypeError(
        `${type.charAt(0).toUpperCase() + type.slice(1)} must be a ${type}`,
      );
    }
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._checkType(newName, 'string');
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    this._checkType(newLength, 'number');
    this._length = newLength;
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._checkType(newStudents, 'array');
    if (!newStudents.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = newStudents;
  }
}
