// tests/
// failing.spec.ts
import { expect } from "chai";

describe("Padající testy", () => {
  it("1 rovná se 2", () => {
    expect(1).to.equal(2);
  });

  it("1 rovná se 2 (vlastní zpráva)", () => {
    expect(1, "Moje vlastní assert zpráva").to.equal(2);
  });
});
