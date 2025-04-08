/**
 * @description fibonacci sequence test
 * @author clu
 */

import { fibonacciIterator } from "../9-fibo";

// const sample_fibo = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

describe('Find n-th number in the Fibonacci sequence', () => {
    it('0 and 1', () => {
        expect(fibonacciIterator(0)).toBe(0);
        expect(fibonacciIterator(1)).toBe(1);
    })

    it('n smaller than 0', () => {
        expect(fibonacciIterator(-1)).toBe(0);
    })

    it('functional test', () => {
        const res = fibonacciIterator(9);
        expect(res).toEqual(34);
    })
})