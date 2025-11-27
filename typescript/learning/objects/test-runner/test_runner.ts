// typescript/learning/objects/test-runner/
// test_runner.ts

import { TestCase } from "./test_case.ts";
import { TestSuite } from "./test_suite.ts";

const myTest = new TestCase("Login should work");
const failedLoginTest = new TestCase(
  "Login shouldnt work with incorrect credentials"
);
const resetPasswordTest = new TestCase(
  "Password should be reset after expiration"
);

const loginSuite = new TestSuite("Tredgate App Login Tests");
loginSuite.addTest(myTest);
loginSuite.addTest(failedLoginTest);
loginSuite.addTest(resetPasswordTest);

loginSuite.addTestsByName([
  "Empty username",
  "Empty password",
  "Lost password",
  "Empty credentials",
  "Mobile view",
]);

loginSuite.runAll();

myTest.pass();
resetPasswordTest.fail();
failedLoginTest.fail();

console.log(loginSuite.report());
// * Prvotní ověření funkčnosti TestCase
// console.log(JSON.stringify(myTest, null, 2)); // ? Vypsání struktury objektu pro kontrolu
//
// myTest.run();
// console.log("Spuštěný test: " + myTest.status);
// myTest.pass();
// console.log("Úspěšný test: " + myTest.status);
// myTest.fail();
// console.log("Neúspěšný test: " + myTest.status);
