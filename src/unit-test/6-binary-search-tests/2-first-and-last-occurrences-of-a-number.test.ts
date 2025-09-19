import { firstAndLastOccurrencesOfANumber } from "../../6-binary-search/2-first-and-last-occurrences-of-a-number";

describe("First and Last Occurrence of a Number", () => {
    const nums = [1, 2, 2, 2, 3, 4, 4, 10];

    it("returns [-1, -1] when target not present", () => {
        expect(firstAndLastOccurrencesOfANumber(nums, 5)).toEqual([-1, -1]);
    });

    it("returns correct [first, last] when present", () => {
        expect(firstAndLastOccurrencesOfANumber(nums, 2)).toEqual([1, 3]);
        expect(firstAndLastOccurrencesOfANumber(nums, 4)).toEqual([5, 6]);
        expect(firstAndLastOccurrencesOfANumber(nums, 1)).toEqual([0, 0]);
        expect(firstAndLastOccurrencesOfANumber(nums, 10)).toEqual([7, 7]);
    });

    it("edge cases: empty and single-element arrays", () => {
        expect(firstAndLastOccurrencesOfANumber([], 1)).toEqual([-1, -1]);
        expect(firstAndLastOccurrencesOfANumber([3], 3)).toEqual([0, 0]);
        expect(firstAndLastOccurrencesOfANumber([3], 2)).toEqual([-1, -1]);
    });

    it("all elements equal", () => {
        expect(firstAndLastOccurrencesOfANumber([7, 7, 7, 7, 7], 7)).toEqual([0, 4]);
        expect(firstAndLastOccurrencesOfANumber([7, 7, 7, 7, 7], 6)).toEqual([-1, -1]);
    });
});