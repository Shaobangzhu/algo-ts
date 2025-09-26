import { findTargetInRotatedSortedArray } from "../../6-binary-search/4-find-the-target-in-a-rotated-sorted-array";

describe('Find Target In Rotated Sorted Array', () => {
    it('find the element in a typical rotated array', () => {
        expect(findTargetInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
    });

    it('returns -1 when element does not exist', () => {
        expect(findTargetInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
    });

    it('works when array is not rotated', () => {
        expect(findTargetInRotatedSortedArray([1, 2, 3, 4, 5], 4)).toBe(3);
    });

    it('handles sindle-element arrays', () => {
        expect(findTargetInRotatedSortedArray([1], 1)).toBe(0);
        expect(findTargetInRotatedSortedArray([1], 88)).toBe(-1);
    });

    it('handles empty array', () => {
        expect(findTargetInRotatedSortedArray([], 5)).toBe(-1);
    });

    it('target at boundaries', () => {
        expect(findTargetInRotatedSortedArray([6,7,0,1,2,3,4,5], 0)).toBe(2);
        expect(findTargetInRotatedSortedArray([6,7,0,1,2,3,4,5], 6)).toBe(0);
        expect(findTargetInRotatedSortedArray([6,7,0,1,2,3,4,5], 5)).toBe(7);
    });
});