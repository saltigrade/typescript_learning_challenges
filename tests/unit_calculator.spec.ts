// tests/
// unit_calculator.spec.ts

import { expect } from "chai";
import { Calculator } from "../src/calculator_oop.ts";

describe("Jednotkové testy kalkulačky", () => {
  it("Calculator.add(2, 3) to equal 5", () => {
    const calculator = new Calculator();
    const addResult = calculator.add(2, 3);
    expect(addResult).to.equal(5);
    // expect(calculator.add(2, 3)).to.equal(5); // ? Do expectu můžeme vložit přímo volanou metodu, kterou testujeme. V případě komplexních scénářů toto ale může snižovat srozumitelnost a čitelnost testu.
  });

  it("Calculator.subtract(5, 3) to equal 2", () => {
    const calculator = new Calculator();
    const subtractResult = calculator.subtract(5, 3);
    expect(subtractResult).to.equal(2);
  });

  it("Calculator.multiply(2, 5) to equal 10", () => {
    const calculator = new Calculator();
    const multiplyResult = calculator.multiply(2, 5);
    expect(multiplyResult).to.equal(10);
  });

  it("Calculator.divide(8, 2) to equal 4", () => {
    const calculator = new Calculator();
    const divideResult = calculator.divide(8, 2);
    expect(divideResult).to.equal(4);
  });
});
