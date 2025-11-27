// typescript/learning/values-and-variables/
// values.ts

// * Datové typy
// * String (text)
console.log("Toto je string");
console.log('Toto je také "string"');
console.log(`Toto je template literal`); // ? ``: Windows (CZ klávesnice): pravý ALT + ý, ALT + 96 (NUM),  MAC: SHIFT + ` <-- nalevo od enter nebo naprovo od levého shiftu (CZ klávesnice)

// * Number (číslo)
console.log(15); // ! Čísla vždy musí být bez uvozovek! Jinak je to string, což způsobí problémy například při sčítání
console.log(5.45); // ? V desetinném čísle píšeme jen desetinnou tečku
console.log(5_000_000_000); // ? _ je pomocný znak pro lidi, TypeScript jej ignoruje - používáme pro lepší přehlednost čísel
console.log("5" + 5); // ! Výsledek: 55 - pokud totiž dáváme + mezi stringy, tak se jedná o sloučení textů a ne o sčítání čísel
console.log(5 + 5); // ? Výsledek: 10 - proběhne sečtení
console.log(0.2 * 0.1); // ? Výsledek: 0.020000000000000004, proto pokud někdy budete počítat s desetinnými čísly, tak se běžně zaokrouhluje například na 5. řád: 0.00001

// * Boolean (logická hodnota)
console.log(true);
console.log(false);

// * Prázdné hodnoty (undefined a null)
console.log(undefined);
console.log(null);
