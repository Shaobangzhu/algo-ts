import { pairSumUnsorted } from "../../2-hashmaps-and-sets/1-2sum-unsorted";

describe("Pair Sum - Unsorted", ()=>{
    it("returns correct indices for valid pair", () => {
        expect(pairSumUnsorted([2, 7, 11, 15], 9)).toEqual([0, 1]);
    });
    it("returns correct indices for valid pair with negative numbers", () => {
        expect(pairSumUnsorted([3, -1, 4, 5], 2)).toEqual([0, 1]);
    });
    it("returns correct indices when valid pair appears later in the array", () => {
        expect(pairSumUnsorted([1, 5, 3, 4], 9)).toEqual([1, 3]);
    });
    it("returns empty array when no valid pair exists", () => {
        expect(pairSumUnsorted([1, 2, 3], 10)).toEqual([]);
    });
    it("handles duplicate values correctly", () => {
        expect(pairSumUnsorted([3, 3], 6)).toEqual([0, 1]);
    });
    it("returns empty array for empty input", () => {
        expect(pairSumUnsorted([], 9)).toEqual([]);
    });
    it("returns empty array if array has only one element", () => {
        expect(pairSumUnsorted([1], 2)).toEqual([]);
    });
    it("returns the first correct pairs found", () => {
        expect(pairSumUnsorted([1, 4, 2, 3, 5], 7)).toEqual([1, 3]);
    });
});