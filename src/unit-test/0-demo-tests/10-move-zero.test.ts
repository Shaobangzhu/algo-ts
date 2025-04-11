/**
 * @description Move 0s to the end of an array test
 * @author clu
 */

import { moveZero3 } from '../../0-demo/10-move-zero';

describe('Move 0s to the end of the array', () => {
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
    // it.only('performance test', () => {
    //     const arr1 = [];
    //     for (let i = 0; i < 20 * 10000; i++) {
    //         if (i % 10 === 0) {
    //             arr1.push(0);
    //         } else {
    //             arr1.push(i);
    //         }
    //     }

    //     console.time('test moveZero1');
    //     moveZero1(arr1);
    //     console.timeEnd('test moveZero1');

    //     const arr2 = [];
    //     for (let i = 0; i < 20 * 10000; i++) {
    //         if (i % 10 === 0) {
    //             arr2.push(0);
    //         } else {
    //             arr2.push(i);
    //         }
    //     }

    //     console.time('test moveZero3');
    //     moveZero3(arr2);
    //     console.timeEnd('test moveZero3');
    // })
})