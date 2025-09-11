import { isHappyNumber } from "../../4-fast-and-slow-pointers/3-happy-number";

describe("isHappyNumber", () => {
  it("returns true for known happy numbers", () => {
    const happy = [
      1, 7, 10, 13, 19, 23, 28, 31, 32, 44, 49, 68, 70, 79, 82, 86, 91, 94, 97,
      100,
    ];
    for (const n of happy) {
      expect(isHappyNumber(n)).toBeTruthy();
    }
  });
  it("returns false for known unhappy numbers", () => {
    const unhappy = [
      2, 3, 4, 5, 6, 8, 9, 11, 12, 14, 15, 16, 18, 20, 21, 22, 24,
    ];
    for (const n of unhappy) {
      expect(isHappyNumber(n)).toBeFalsy();
    }
  });
  it("handles edge cases", () => {
    expect(isHappyNumber(0)).toBe(false); // not happy by definition
    expect(isHappyNumber(1)).toBe(true); // base case
  });
  it('works for larger inputs', () => {
    expect(isHappyNumber(100000)).toBe(true); // 1 with zeros → next is 1
    expect(isHappyNumber(2147483647)).toBe(false); // still terminates via cycle
  });
});
