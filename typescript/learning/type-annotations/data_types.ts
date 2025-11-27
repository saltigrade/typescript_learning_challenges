// typescript/learning/type-annotations/
// data_types.ts

let isActive = true; // ? Implicitní typová anotace - automaticky se přiřadí typ: boolean
// isActive = 4; // ! NOK: nemůžu přiřadit number do boolean
isActive = false; // * OK: stejný datový typ: boolean (logická hodnota)

let address: string; // ? Explicitní typová anotace, ručně přiřazujeme datový typ - u proměnných se děje většinou, když proměnnou přímo neinicalizujeme
address = "Nová 14"; // * OK: address i hodnota je string
// address = 14; // ! NOK: hodnota je number, proměnná string

// * Typy any, unknown se používají ve chvíli, kdy proměnné může mít jakýkoliv datový typ - automaticky se poté typuje typ dat (typová interference)
// ! Těmto typům se vyhýbáme a používáme pouze, pokud nejsme schopni datový typ určit - vede k chybám
let nationalId: any;
let passportId: unknown;
nationalId = 12345;
nationalId = "54121";
nationalId = true;
passportId = 59412;
passportId = "abcd";
passportId = false;
