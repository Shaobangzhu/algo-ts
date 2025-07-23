import { findMissingAndRepeatedValues } from "../../lc-29-easy/22-lc-find-missing-and-repeated-values";

describe("2965. Find Missing and Repeated Values", () => {
  it("Example 1", () => {
    expect(
      findMissingAndRepeatedValues([
        [1, 3],
        [2, 2],
      ])
    ).toEqual([2, 4]);
  });

  it("Example 2", () => {
    expect(
      findMissingAndRepeatedValues([
        [9, 1, 7],
        [8, 9, 2],
        [4, 5, 6],
      ])
    ).toEqual([9, 3]);
  });

  it("Single Element Grid", () => {
    expect(findMissingAndRepeatedValues([[1]])).toEqual([-1, -1]); // Edge case: no duplication
  });
});
