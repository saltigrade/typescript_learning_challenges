// typescript/learning/async/
// basic_promises.ts

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      // ? setTimeout je funkce, která vykoná zadanou funkci po zadaném počtu milisekund.
      resolve();
      console.log("Promise konec");
    }, ms);
  });
}

// ? Nastavení funkce square, která bude vracet Promise, který se vyřeší po 1 sekundě a vrátí druhou mocninu zadaného čísla.
function square(number: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = number * number;
      resolve(result);
    }, 1000);
  });
}

async function main() {
  const squaredThreeResult = await square(3);
  console.log("Výsledek main: " + squaredThreeResult);
}

main();

// console.log("Čekám 5 sec.");
// wait(5000);
// console.log("Dočekáno?");

// const squaredResult = square(2); // ! NOK: dostaneme výsledek Promise pending
// console.log(squaredResult);

// // * Správné použití Promise funkcí (async):
// square(5).then((squareFiveResult) => {
//   console.log("Výsledek výpočtu: " + squareFiveResult);
// });
