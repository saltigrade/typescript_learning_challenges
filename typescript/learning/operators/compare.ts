// typescript/learning/operators/
// compare.ts
let expectedPassword = "123456"; // ? let zde používáme jen proto, abychom předešli chybám při porovnávání v rámci const (typescript je schopný přímo říct, že některé const se nebudou rovnat) -> This comparison appears to be unintentional because the types '"123456"' and '"abcd123"' have no overlap.
let correctPassword = "123456";
let incorrectPassword = "abcd123";
let passwordNumber = 123456;

// * Očekávaný výsledek: true
const success = expectedPassword === correctPassword; // ? porovnání dvou hodnost, jestli se jim rovná hodnoty a i datové typy
console.log("Úspěšné porovnání: " + success);

const failure = expectedPassword === incorrectPassword; // * Očekávaný výsledek: false
console.log("Neúspěšné porovnání: " + failure);

//const invalidTypesCompare = expectedPassword == passwordNumber; // ! Nelze porovnat string a number

const notEqual = expectedPassword !== correctPassword; // ? Kontrolujeme nerovnost, výsledek bude false. Nerovnost kontroluje to, že se hodnoty dvou členů nerovnají (1 !== 2 je true)
console.log("Nerovnost: " + notEqual);
