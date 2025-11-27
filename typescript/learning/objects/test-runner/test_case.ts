// typescript/learning/objects/test-runner/
// test_case.ts

export type TestStatus = "pending" | "passed" | "failed" | "in progress";

export class TestCase {
  name: string; // ? Název testu
  status: TestStatus = "pending"; // ? Nový test je vždy ve stavu pending

  constructor(name: string) {
    this.name = name;
  }

  run() {
    this.status = "in progress";
    console.log(`Running test: ${this.name}`);
  }

  pass() {
    this.status = "passed";
    console.log(`Test Passed: ${this.name}`);
  }

  fail() {
    this.status = "failed";
    console.log(`Test Failed: ${this.name}`);
  }
}
