/**
 * @description binary search test
 * @author clu
 */

import { binarySearch1, binarySearch2 } from "../6-binary-search";

describe('Binary Search', () => {
    it('functional test for binarySearch1', () => {
        const arr = [10, 20, 30, 40, 50]
        const target = 40;
        const index = binarySearch1(arr, target);
        expect(index).toBe(3);
    })

    it('functional test for binarySearch2', () => {
        const arr = [10, 20, 30, 40, 50]
        const target = 40;
        const index = binarySearch2(arr, target);
        expect(index).toBe(3);
    })

    it('empty array', () => {
        expect(binarySearch1([], 100)).toBe(-1);
    })

    it('cannot find target', () => {
        const arr = [10, 20, 30, 40, 50]
        const target = 100;
        const index = binarySearch1(arr, target);
        expect(index).toBe(-1);
    })

    // it('性能测试, 对比iteration and recursion', () => {
    //     const target = 90;
    //     const arr: number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];

    //     console.time('iteration');
    //     for (let i = 0; i < 10000; i++) {
    //         binarySearch1(arr, target);
    //     }
    //     console.timeEnd('iteration');
        
    //     console.time('recursion');
    //     for (let i = 0; i < 10000; i++) {
    //         binarySearch2(arr, target);
    //     }
    //     console.timeEnd('recursion');
    // })
});