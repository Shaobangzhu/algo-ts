/**
 * @description Count and record the longest continuous char test
 * @author clu
 */

import { findContinuousChar2 } from "../../0-demo/11-continuous-char";

describe('Finds the character that appears most continuously in a string.', () => {
    it('functional test', () => {
        const res = findContinuousChar2('aaaaabbcccdddadddeeeaaaaaaaabbcba');
        expect(res).toEqual({ char: 'a', length: 8});
    })
    it('empty string', () => {
        const res = findContinuousChar2('');
        expect(res).toEqual({ char: '', length: 0});
    })
    it('no continuous char', () => {
        const res = findContinuousChar2('abcdefg');
        expect(res).toEqual({ char: 'a', length: 1});
    })
    it('all the same char', () => {
        const res = findContinuousChar2('aaaaaaaa');
        expect(res).toEqual({ char: 'a', length: 8});
    })
})