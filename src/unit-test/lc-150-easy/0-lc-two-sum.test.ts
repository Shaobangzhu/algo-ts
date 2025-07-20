import { twoSum2 } from "../../lc-150-easy/0-lc-two-sum";

describe("Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target", () => {
    it("input array is [2, 7, 11, 15], target is 9", () => {
        const res = twoSum2([2, 7, 11, 15], 9);
        expect(res).toEqual([0, 1]);
    });
    it("input array is [3, 2, 4], target is 6", () => {
        const res = twoSum2([3, 2, 4], 6);
        expect(res).toEqual([1, 2]);
    });
    it("input array is [3, 3], target is 6", () => {
        const res = twoSum2([3, 3], 6);
        expect(res).toEqual([0, 1]);
    });
}); 
 