import { areAlmostEqual } from "../../lc-100-easy/26-lc-check-if-one-string-swap-can-make-strings-equal";

describe("1790. Check if One String Swap Can Make Strings Equal", () => {
  it("Same strings", () => {
    expect(areAlmostEqual("abcd", "abcd")).toBe(true);
  });

  it("One valid swap makes equal", () => {
    expect(areAlmostEqual("bank", "kanb")).toBe(true); // swap b<->k
  });

  it("More than one mismatch", () => {
    expect(areAlmostEqual("attack", "defend")).toBe(false);
  });

  it("Edge case: single character", () => {
    expect(areAlmostEqual("a", "a")).toBe(true);
  });
});
