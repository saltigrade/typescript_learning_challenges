// typescript/learning/objects/test-runner/
// test_suite.ts

import { TestCase, TestStatus } from "./test_case.ts";

export class TestSuite {
  name: string;
  private tests: TestCase[] = []; // ? Typ: array TestCase, startovní hodnota: prázdná array (seznam)

  constructor(name: string) {
    this.name = name;
  }

  addTest(test: TestCase) {
    this.tests.push(test);
    console.log(`Test Suite: ${this.name}, Added test: ${test.name}`);
  }

  addTestsByName(names: string[]) {
    names.forEach((name) => {
      const test = new TestCase(name);
      this.addTest(test);
    });
    console.log(`Test Suite: ${this.name}, Added Tests: ${names}`);
  }

  runAll() {
    this.tests.forEach((test) => {
      test.run();
    });
    console.log(`Test Suite: ${this.name}, all tests in suite started`);
  }

  getTestsByStatus(status: TestStatus): TestCase[] {
    const filteredTests = this.tests.filter((test) => test.status === status); // ? Filtr na array nám rychle umožňuje protřídit (vyfiltrovat) požadované hodnoty
    return filteredTests;
  }

  report(): string {
    const pendingTests = this.getTestsByStatus("pending").length;
    const runningTests = this.getTestsByStatus("in progress").length;
    const passedTests = this.getTestsByStatus("passed").length;
    const failedTests = this.getTestsByStatus("failed").length;
    const total = this.tests.length;

    const reportMessage = `==== TEST REPORT: ${this.name} ====
- Total Tests: ${total}
- Passed: ${passedTests}
- Success rate: ${Math.round((passedTests / total) * 100)}%

---- DETAILS ----
- Pending: ${pendingTests}
- In progress: ${runningTests}
- Passed: ${passedTests}
- Failed: ${failedTests}
============================
    `;
    return reportMessage;
  }
}
