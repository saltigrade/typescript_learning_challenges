// typescript/learning/operators/
// arithmetic.ts
let result: number;

// * Sčítání
result = 5 + 6; // ! POZOR: operátor + je jak sčítací (number), tak slučovací (string)
console.log("Sčítání: " + result);

// * Odčítání
result = 8 - 7;
console.log("Odčítání: " + result);

// * Násobení
result = 4 * 6;
console.log("Násobení: " + result);

// * Dělení
result = 10 / 2;
console.log("Dělení: " + result);

// * Mocnění
result = 2 ** 3; // ? 2 na 3. = 8
console.log("Mocnění: " + result);

// * Modulo (zobrazuje zbytek po dělení)
result = 5 % 2; // ? Výsledek: 1, 5 / 2 = 2 a zbytek 1
console.log("Zbytek po dělení: " + result);

// * Inkrement - přičítání +1 k číslu
result = 2;
result++; // ? Přičte 1 k result: 2 + 1 = 3 <- result, alternativa k: result = result + 1
console.log("Inkrement k 2: " + result);

// * Dekrement - odčítání 1 z čísla a přiřazení
result = 2;
result--; // ? Odečte 1 z result a přiřadí hodnotu: result = 2 - 1; result = 1;
console.log("Dekrement z 2: " + result);
