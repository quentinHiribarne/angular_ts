"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentStatus = exports.Student = void 0;
/**
 * Student class
 * @param name: string - Student name
 * @param age: number - Student age
 */
var Student = /** @class */ (function () {
    function Student(name, age, status) {
        if (status === void 0) { status = StudentStatus.Student; }
        this.name = name;
        this.age = age;
        this.status = status;
    }
    Object.defineProperty(Student.prototype, "Status", {
        /**
         * Get student status
         * @returns StudentStatus
         */
        get: function () {
            return this.status;
        },
        /**
         * Set student status
         * @param status - Student status
         * @returns void
         */
        set: function (status) {
            this.status = status;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
exports.Student = Student;
/**
 * Student status enum
 * @param Graduate - Student is graduated
 * @param Student - Student is currently studying
 * @param Intern - Student is currently doing an internship
 */
var StudentStatus;
(function (StudentStatus) {
    StudentStatus[StudentStatus["Graduate"] = 0] = "Graduate";
    StudentStatus[StudentStatus["Student"] = 1] = "Student";
    StudentStatus[StudentStatus["Intern"] = 2] = "Intern";
})(StudentStatus || (StudentStatus = {}));
exports.StudentStatus = StudentStatus;
