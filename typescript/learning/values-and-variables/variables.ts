// typescript/learning/values-and-variables/
// variables.ts

let firstName = "Petr"; // ? Deklarace a inicializace proměnné
// "Petr" = let someName // ! Nelze prohazovat deklaraci a inicializaci
let lastName; // ? Deklarace proměnné - nabývá hodnoty undefined
lastName = "Novák"; // ? Inicializace proměnné lastName (ukládáme do proměnné hodnotu)

console.log(firstName); // ? Vypíše: Petr
console.log("Křestní jméno: " + firstName); // ? Proběhne sloučení textů, výsledek: Křestní jméno: Petr
console.log(firstName + " " + lastName); // ? Sloučení více proměnných a přidání mezery

firstName = "Sabina"; // ? Reinicializace (změnu) hodnoty proměnné
console.log(firstName);

firstName = "Sabuelita";
console.log(firstName);

// * Deklarace proměnné pro blok
// ? Proměnná let je deklarovaná pro blok - pokud je deklarace uvnitř bloku {}, tak proměnná existuje pouze uvnitř tohoto bloku a ne mimo:
let city = "Praha";
{
  let country = "Česko";
  console.log("Země: " + country); // * OK -> použití proměnné uvnitř bloku kódu, která byla zde i deklarovaná
  console.log("Město: " + city); // * OK -> zvenku dovnitř kódu můžeme proměnné používat
}
// console.log(country); // ! NOK -> zevnitř ven není možné proměnnou let použít
// let city; // ! NOK -> nelze redeklarovat proměnnou let. Chyba: Cannot redeclare block-scoped variable 'city'.

// * Proměnná: const (konstanta)
const continent = "Evropa"; // * OK: deklarace a inicializace
// const username; // ! NOK: const musím vždy inicializovat při deklaraci
// continent = "Severní Amerika"; // ! NOK: const nemůžu měnit hodnotu, chyba: Cannot assign to 'continent' because it is a constant.
// const continent = "Afrika"; // ! NOK: Nelze redeklarovat, chyba: Cannot redeclare block-scoped variable 'continent'.
{
  const email = "petr@tredgate.cz";
  console.log(email); // * OK -> použití proměnné uvnitř bloku kódu, která byla zde i deklarovaná
}
// console.log(email); // ! NOK -> nelze redeklarovat proměnnou const. Chyba: Cannot redeclare block-scoped variable 'email'.
