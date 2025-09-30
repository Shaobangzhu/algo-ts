import { nextLargestNumberToTheRight } from "../../7-stacks/2-next-largest-number-to-the-right";

describe('Next Largest Number to the right', () => {
    it('handles the sample case', () => {
        expect(nextLargestNumberToTheRight([2, 1, 2, 4, 3])).toEqual([4, 2, 4, -1, -1]);
    });

    it('returns empty array for empty input', () => {
        expect(nextLargestNumberToTheRight([])).toEqual([]);
    });

    it('handles single element', () => {
        expect(nextLargestNumberToTheRight([5])).toEqual([-1]);
    });

    it('works for strictly decreasing array', () => {
        expect(nextLargestNumberToTheRight([4, 3, 2, 1])).toEqual([-1, -1, -1, -1]);
    });

    it('treats equal values as not greater (strictly greater required)', () => {
        expect(nextLargestNumberToTheRight([2, 2, 2])).toEqual([-1, -1, -1]);
    });

    it('handles negative and mixed values', () => {
        expect(nextLargestNumberToTheRight([-3, 1, 4, -2, 0])).toEqual([1, 4, -1, 0, -1]);
    });
});