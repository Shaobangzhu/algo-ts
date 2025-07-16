import { longestMonotonicSubarray } from "../../lc-200-easy/13-lc-longest-strictly-increasing-or-strictly-decreasing-subarray";

describe("3105. Longest Strictly Increasing or Strictly Decreasing Subarray", () => {
  it("handles basic cases", () => {
    expect(longestMonotonicSubarray([1, 4, 3, 3, 2])).toBe(2);
    expect(longestMonotonicSubarray([3, 3, 3, 3])).toBe(1);
    expect(longestMonotonicSubarray([3, 2, 1])).toBe(3);
  });

  it("handles single element / empty arrays", () => {
    expect(longestMonotonicSubarray([42])).toBe(1);
    expect(longestMonotonicSubarray([])).toBe(1); // 可按题意默认返回1
  });

  it("handles strictly increasing array", () => {
    expect(longestMonotonicSubarray([1, 2, 3, 4, 5])).toBe(5);
  });

  it("handles strictly decreasing array", () => {
    expect(longestMonotonicSubarray([5, 4, 3, 2, 1])).toBe(5);
  });

  it("handles mixed sequences", () => {
    // 从递增切换到递减
    expect(longestMonotonicSubarray([1, 3, 5, 4, 2])).toBe(3);

    // 多段切换
    expect(longestMonotonicSubarray([1, 2, 1, 2, 1, 2, 1])).toBe(2);

    // 长度 50 上限内的随机测试
    const arr = [1, 2, 3, 2, 1, 2, 3, 4, 3, 2, 1];
    expect(longestMonotonicSubarray(arr)).toBe(4);
  });

  it("handles constant plateaus with resets", () => {
    expect(longestMonotonicSubarray([1, 2, 2, 3, 4, 4, 3, 2, 2, 1])).toBe(3);
  });
});
