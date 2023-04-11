"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var student_1 = require("./class/student");
// TS apporte la notion de type
// let variable: type
var iwCount = 19;
var iwName = "ESGI IW M2";
// List des types primitifs
// https://www.typescriptlang.org/docs/handbook/basic-types.html
// TS support aussi les types génériques
var iwStudents = new Array();
/**
 * Student class
 * @param name: string - Student name
 * @param age: number - Student age
 */
var student = /** @class */ (function () {
    function student(name, age) {
        this.name = name;
        this.age = age;
    }
    return student;
}());
var studentList = new Array();
var quentin = new student_1.Student("Quentin", 25);
studentList.push(quentin);
var louise = new student("Louise", 25);
studentList.push(louise);
// TS supporte les union types
var unionType = "Hello";
// TS supporte les enum
// Enum est un type qui contient une liste de valeurs
// numériques commençant à 0.
// On peut définir la valeur souhaitez avec l'opérateur
// d'affectation '='
var StudentStatus1;
(function (StudentStatus1) {
    StudentStatus1[StudentStatus1["Graduate"] = 0] = "Graduate";
    StudentStatus1[StudentStatus1["Student"] = 1] = "Student";
    StudentStatus1[StudentStatus1["Intern"] = 2] = "Intern";
})(StudentStatus1 || (StudentStatus1 = {}));
var someStatus = "Intern";
quentin.status = student_1.StudentStatus.Intern;
var dito;
