import { removeDuplicates } from "../../lc-200-easy/18-lc-remove-duplicates-from-sorted-array";

describe("26. Remove Duplicates from Sorted Array", () => {
  it("should return 2 and modify array for [1,1,2]", () => {
    const nums = [1, 1, 2];
    const k = removeDuplicates(nums);
    expect(k).toBe(2);
    expect(nums.slice(0, k)).toEqual([1, 2]);
  });

  it("should return 5 and modify array for [0,0,1,1,1,2,2,3,3,4]", () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const k = removeDuplicates(nums);
    expect(k).toBe(5);
    expect(nums.slice(0, k)).toEqual([0, 1, 2, 3, 4]);
  });

  it("should return 0 for empty array", () => {
    const nums: number[] = [];
    const k = removeDuplicates(nums);
    expect(k).toBe(0);
    expect(nums).toEqual([]);
  });

  it("should return 1 for all same elements", () => {
    const nums = [2, 2, 2, 2, 2];
    const k = removeDuplicates(nums);
    expect(k).toBe(1);
    expect(nums.slice(0, k)).toEqual([2]);
  });

  it("should return length unchanged if all elements are unique", () => {
    const nums = [1, 2, 3, 4, 5];
    const k = removeDuplicates(nums);
    expect(k).toBe(5);
    expect(nums.slice(0, k)).toEqual([1, 2, 3, 4, 5]);
  });
});
