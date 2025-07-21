import { majorityElement2 } from "../../lc-100-easy/16-lc-majority-element";

describe("169. Majority Element", () => {
  it("returns the correct majority for [3, 2, 3]", () => {
    expect(majorityElement2([3, 2, 3])).toBe(3);
  });

  it("returns the correct majority for [2, 2, 1, 1, 1, 2, 2]", () => {
    expect(majorityElement2([2, 2, 1, 1, 1, 2, 2])).toBe(2);
  });

  it("returns the only element for single-element array", () => {
    expect(majorityElement2([1])).toBe(1);
  });

  it("returns correct result for all elements the same", () => {
    expect(majorityElement2([5, 5, 5, 5, 5])).toBe(5);
  });

  it("returns correct result for large input", () => {
    const input = new Array(10001).fill(7).concat(new Array(4999).fill(1));
    expect(majorityElement2(input)).toBe(7);
  });
});
