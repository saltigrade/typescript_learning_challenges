// typescript/learning/functions/
// return_values.ts

// ? Explicitní určení návratového typu (return) na string - dělá se v případech, kdy potřebujeme mít vždy jistotu, že se bude vracet stejný datový typ
function generateUsername(prefix: string): string {
  const randomNumber = Math.random() * 10_000; // ? Math.random vygeneruje náhodné číslo mezi 0 a 1, násobení 10_000 nám z náhodně vytvořeného čísla přehodí řády: 0.012345 => 123.45
  const roundRandomNumber = Math.round(randomNumber); // ? Math.round mi zaokrouhlí desetinné číslo na celé číslo
  const generatedUsername = prefix + "_" + roundRandomNumber;
  return generatedUsername; // ? Return nám vrací hodnotu do místa, odkud funkci voláme. Zároveň je ale vždy poslední příkaz, který se provolá!
  console.log("Toto se už nevypíše");
}

const adminUser = generateUsername("admin");
const customerUser = generateUsername("customer");

console.log("Admin username: " + adminUser);
console.log("Customer username: " + customerUser);
