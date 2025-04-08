/**
 * @description Move 0s to the end of an array test
 * @author clu
 */

import { moveZero3 } from '../10-move-zero';

describe.only('Move 0s to the end of the array', () => {
    it('functional test', () => {
        const arr = [1, 0, 0, 4, 3, 0, 11, 0];
        moveZero3(arr);
        expect(arr).toEqual([1, 4, 3, 11, 0, 0, 0, 0]);
    })
    it('no zero', () => {
        const arr = [1, 3, 4, 11, 12, 25, 33, 47];
        moveZero3(arr);
        expect(arr).toEqual([1, 3, 4, 11, 12, 25, 33, 47]);
    })
    it('all zero', () => {
        const arr = [0, 0, 0, 0, 0, 0, 0, 0];
        moveZero3(arr);
        expect(arr).toEqual([0, 0, 0, 0, 0, 0, 0, 0]);
    })
})