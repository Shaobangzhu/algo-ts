import { SumBetweenRange } from "../../10-prefix-sums/1-sum-btw-range";

describe("Sun Between Range", () => {
  it("builds prefix sum correctly and handles basic queries", () => {
    const nums = [2, 3, 5, 7, 11];
    const s = new SumBetweenRange(nums);

    expect(s.sumRange(0, 0)).toBe(2); // single element
    expect(s.sumRange(0, 2)).toBe(2 + 3 + 5);
    expect(s.sumRange(1, 3)).toBe(3 + 5 + 7);
    expect(s.sumRange(2, 4)).toBe(5 + 7 + 11);
  });
});
