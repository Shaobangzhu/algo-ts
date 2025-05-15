import { pairSumSorted } from "../../1-two-pointers/1-2sum";

describe('Two Sum', () => {
    it('Tests an empty array', () => {
       expect(pairSumSorted([], 0)).toEqual([]); 
    })
    it('Tests an array with just one element', () => {
        expect(pairSumSorted([1], 1)).toEqual([]);
    })
    it('Tests a two-element array that contains a pair that sums to the target', () => {
        expect(pairSumSorted([2, 3], 5)).toEqual([0, 1]);
    })
    it('Tests a two-element array that does NOT contain a pair that sums to the target', () => {
        expect(pairSumSorted([2, 4], 5)).toEqual([]);
    })
    it('Testing an array with duplicate values', () => {
        const result = pairSumSorted([2, 2, 3], 5);
        expect([[0, 2], [1, 2]]).toContainEqual(result);
    })
    it('Tests if the algorithm works with a negative number in the target pair', () => {
        expect(pairSumSorted([-1, 2, 3], 2)).toEqual([0, 2]);
    })
    it('Tests if the algorithm works with both numbers of the target pair being engative', () => {
        expect(pairSumSorted([-3, -2, -1], -5)).toEqual([0, 1]);
    })
})