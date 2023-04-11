import { Pokemon } from "./interface/pokemon";
import { Student, StudentStatus } from "./class/student";

// TS apporte la notion de type
// let variable: type
const iwCount: number = 19;
const iwName: string = "ESGI IW M2";

// List des types primitifs
// https://www.typescriptlang.org/docs/handbook/basic-types.html

// TS support aussi les types génériques
const iwStudents = new Array<string>();

/**
 * Student class
 * @param name: string - Student name
 * @param age: number - Student age
 */
class student {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const studentList = new Array<student>();

const quentin = new Student("Quentin", 25);
studentList.push(quentin);

const louise = new student("Louise", 25);
studentList.push(louise);

// TS supporte les union types
const unionType: string | number = "Hello";

// TS supporte les enum
// Enum est un type qui contient une liste de valeurs
// numériques commençant à 0.
// On peut définir la valeur souhaitez avec l'opérateur
// d'affectation '='
enum StudentStatus1 {
  Graduate,
  Student,
  Intern,
}
// Peut aussi s'écrire
type StudentStatus2 = "Graduate" | "Student" | "Intern";

const someStatus: StudentStatus2 = "Intern";

quentin.status = StudentStatus.Intern;

// TS supporte les interfaces
// eg: interface Pokemon
let dito: Pokemon;

const addPokemon = (pokemon: Pokemon, quantity?: number) => {
  // quantity = quantity || 1;
  // or to prevent falsy values like "" or 0
  quantity = quantity ?? 1;

  // ...
};
