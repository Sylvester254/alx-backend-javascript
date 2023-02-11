export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new Error('name must be a string');
    }
    if (!Number.isInteger(length) || length <= 0) {
      throw new Error('length must be a positive integer');
    }
    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new Error('students must be an array of strings');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new Error('name must be a string');
    }
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (!Number.isInteger(length) || length <= 0) {
      throw new Error('length must be a positive integer');
    }
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new Error('students must be an array of strings');
    }
    this._students = students;
  }
}
