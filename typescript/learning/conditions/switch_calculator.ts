// typescript/learning/conditions/
// switch_calculator.ts

// * vytvořit Switch, který bude na základě vstupu (const) volit početní operaci. Možnosti: add, subtract, divide, multiply

const operation: string = "add";
const number1 = 10;
const number2 = 6;
let switchResult;

switch (operation) {
  case "add":
    switchResult = number1 + number2;
    break;
  case "subtract":
    switchResult = number1 - number2;
    break;
  case "divide":
    switchResult = number1 / number2;
    break;
  case "multiply":
    switchResult = number1 * number2;
    break;
  default:
    throw new Error("Neplatná početní operace");
}

console.log(`Výsledek operace: ${operation} je: ${switchResult}`);
