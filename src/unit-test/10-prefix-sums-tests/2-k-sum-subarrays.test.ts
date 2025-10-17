import {
  kSumSubarrays,
  kSumSubarraysOptimized,
} from "../../10-prefix-sums/2-k-sum-subarrays";

type Fn = (nums: number[], k: number) => number;

const runOnBoth = (
  name: string,
  f1: Fn,
  f2: Fn,
  nums: number[],
  k: number,
  expected: number
) => {
  it(`${name} - O(n^2)`, () => {
    expect(f1(nums, k)).toBe(expected);
  });
  it(`${name} - O(n)`, () => {
    expect(f2(nums, k)).toBe(expected);
  });
};

describe("k-sum subarrays", () => {
  runOnBoth("basic example (LeetCode 560)", kSumSubarrays, kSumSubarraysOptimized,[1, 1, 1], 2, 2);
  runOnBoth("single element equals k", kSumSubarrays, kSumSubarraysOptimized, [3], 3, 1);
  runOnBoth("no subarray equals k", kSumSubarrays, kSumSubarraysOptimized, [2, 4, 6], 5, 0);
  runOnBoth("positives with multiple answers", kSumSubarrays, kSumSubarraysOptimized, [1, 2, 3], 3, 2); // [1,2], [3]
  runOnBoth("includes negatives", kSumSubarrays, kSumSubarraysOptimized, [3, 4, 7, 2, -3, 1, 4, 2], 7, 4);
  runOnBoth("empty array", kSumSubarrays, kSumSubarraysOptimized, [], 0, 0);
});
