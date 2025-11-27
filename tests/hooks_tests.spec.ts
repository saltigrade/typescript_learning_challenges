// tests/
// unit_calculator.spec.ts

import { expect } from "chai";
import { Calculator } from "../src/calculator_oop.ts";

describe("Používání hooků - Jednotkové testy kalkulačky", () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
    console.log("beforeEach - Před každým testem");
  });

  before(() => {
    console.log("before - Běžím před prvním testem");
  });

  after(() => {
    console.log("after - běžím po posledním testu");
  });

  afterEach(() => {
    console.log("afterEach - běžím po každém testu");
  });

  it("Calculator.add(2, 3) to equal 5", () => {
    const addResult = calculator.add(2, 3);
    expect(addResult).to.equal(5);
  });

  it("Calculator.subtract(5, 3) to equal 2", () => {
    const subtractResult = calculator.subtract(5, 3);
    expect(subtractResult).to.equal(2);
  });

  it("Calculator.multiply(2, 5) to equal 10", () => {
    const multiplyResult = calculator.multiply(2, 5);
    expect(multiplyResult).to.equal(10);
  });

  it("Calculator.divide(8, 2) to equal 4", () => {
    const divideResult = calculator.divide(8, 2);
    expect(divideResult).to.equal(4);
  });
});
