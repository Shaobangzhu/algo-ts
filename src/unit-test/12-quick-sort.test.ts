/**
 * @description Quick Sort an Array Test
 * @author clu
 */

import { quickSort2 } from "../12-quick-sort";

describe("Quick Sort", () => {
    it('functional test', () => {
        const arr = [2,4,5,12,7,3,1,6,8,11,9,10];
        const res = quickSort2(arr);
        expect(res).toEqual([1,2,3,4,5,6,7,8,9,10,11,12]);
    })
    it('negative number', () => {
        const arr = [-2, 2, -3, 1];
        const res = quickSort2(arr);
        expect(res).toEqual([-3, -2, 1, 2]);
    })
    it('all same number', () => {
        const arr = [2, 2, 2, 2]
        const res = quickSort2(arr);
        expect(res).toEqual([2, 2, 2, 2]);
    })
    it('empty array', () => {
        const res = quickSort2([]);
        expect(res).toEqual([]);
    })
})