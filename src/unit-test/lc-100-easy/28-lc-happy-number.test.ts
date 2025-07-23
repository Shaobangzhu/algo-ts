import { isHappy } from "../../lc-100-easy/28-lc-happy-number";

describe("202. Happy Number", () => {
  it("should return true for 1 (base case)", () => {
    expect(isHappy(1)).toBe(true);
  });

  it("should return true for 19", () => {
    expect(isHappy(19)).toBe(true);
  });

  it("should return false for 2", () => {
    expect(isHappy(2)).toBe(false);
  });

  it("should return false for 4 (known unhappy number cycle)", () => {
    expect(isHappy(4)).toBe(false);
  });

  it("should return true for 7", () => {
    expect(isHappy(7)).toBe(true);
  });

  it("should return false for large unhappy number 116", () => {
    expect(isHappy(116)).toBe(false);
  });

  it("should return true for large happy number 100", () => {
    expect(isHappy(100)).toBe(true); // 1^2 + 0 + 0 = 1
  });
});
