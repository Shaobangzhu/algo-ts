/**
 * @description binary search test
 * @author clu
 */

import { twoSum2 } from "../../0-demo/7-two-sum";

describe('Two Sum', () => {
    it('functional test', () => {
        const arr = [1, 2, 4, 7, 11, 15];
        const res = twoSum2(arr, 15);
        expect(res).toEqual([4, 11]);
    })

    it('empty array', () => {
        const res = twoSum2([], 100);
        expect(res).toEqual([]);
    })

    it('result cannot be found', () => {
        const arr = [1, 2, 4, 7, 11, 15];
        const n = 100;
        const res = twoSum2(arr, n);
        expect(res).toEqual([]);
    })
})