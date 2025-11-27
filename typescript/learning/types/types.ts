// typescript/learning/types/
// types.ts
type Language = "cs" | "en" | "de" | "fr" | "es"; // ? Union type
type Level = "beginner" | "intermediate" | "advanced";
type Tools = "Playwright" | "Cypress" | "Selenium" | "Postman" | "SQL";
type ProgrammingLanguages =
  | "Typescript"
  | "Javascript"
  | "Java"
  | "Python"
  | "C#";

type Student = {
  name: string;
  age: number;
  languages: Language[];
  level: Level;
  tools: Tools[];
  programmingLanguages: ProgrammingLanguages[];
};

function logStudentInfo(student: Student) {
  console.log("=====================");
  console.log(`Student "${student.name}" Information:`);
  console.log("=====================");
  console.log(`Name: ${student.name}`);
  console.log(`Age: ${student.age}`);
  console.log(`Languages: ${student.languages}`);
  console.log(`Level: ${student.level}`);
  console.log(`Tools: ${student.tools}`);
  console.log(`Programming Languages: ${student.programmingLanguages}`);
  console.log("=====================\n");
}

const petrStudent: Student = {
  name: "Petr Novák",
  age: 29,
  languages: ["cs", "en"],
  level: "intermediate",
  tools: ["Cypress", "Playwright"],
  programmingLanguages: ["Javascript", "Typescript"],
};

const annaStudent: Student = {
  name: "Anna Nejedlová",
  age: 22,
  languages: ["de", "es"],
  level: "advanced",
  tools: ["Postman", "SQL"],
  programmingLanguages: ["Java", "Python"],
};

logStudentInfo(petrStudent);
logStudentInfo(annaStudent);
