/**
 * Student class
 * @param name: string - Student name
 * @param age: number - Student age
 */
class Student {
  name: string;
  age: number;
  status: StudentStatus;

  constructor(
    name: string,
    age: number,
    status: StudentStatus = StudentStatus.Student
  ) {
    this.name = name;
    this.age = age;
    this.status = status;
  }

  /**
   * Get student status
   * @returns StudentStatus
   */
  get Status(): StudentStatus {
    return this.status;
  }

  /**
   * Set student status
   * @param status - Student status
   * @returns void
   */
  set Status(status: StudentStatus) {
    this.status = status;
  }
}

/**
 * Student status enum
 * @param Graduate - Student is graduated
 * @param Student - Student is currently studying
 * @param Intern - Student is currently doing an internship
 */
enum StudentStatus {
  Graduate,
  Student,
  Intern,
}

// export class student
export { Student, StudentStatus };
