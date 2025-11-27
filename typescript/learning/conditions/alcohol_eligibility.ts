// typescript/learning/conditions/
// alcohol_eligibility.ts
const actualAge = 15;
const drinkingAgeLimit = 18;
const fullName = "Josef Nový";

if (actualAge >= drinkingAgeLimit) {
  // * Tento blok kódu se provede, pokud je výrok v podmínce true (pravda)
  console.log(`${fullName} už může pít alkohol`); // ? Template literal - umožňuje nám slučovat text (string) s kódem bez používání operátoru +
} else if (actualAge >= 0) {
  // * Tento blok kódu se provede, pokud je výrok v podmínce false (nepravdivý)
  console.log(
    `${fullName} ještě nemůže pít alkohol, chybí mu/jí ještě ${
      drinkingAgeLimit - actualAge
    } roků/let.`
  );
  // console.log(fullName + " ještě nemůže pít alkohol, chybí mu/jí ještě " + (drinkingAgeLimit - actualAge) + " roků/let."); // ? Zápis bez template literals
} else {
  console.log("CHYBA: actualAge musí být větší nebo roven 0");
}

// ? < - WINDOWS: pravý ALT + , MAC: Option + ,
// ? > - Windows: pravý ALT + . MAC: Option + .
// ? { - Windows: pravý ALT + B Mac: Option + í
// ? } - Windows: pravý ALT + N Mac: Option + é
// ? `` - Windows (CZ klávesnice): pravý ALT + ý, ALT + 96 (NUM),  MAC: SHIFT + ` <-- nalevo od enter nebo naprovo od levého shiftu (CZ klávesnice)
// ? $ - Windows: pravý ALT + ů, Mac: Option + č
