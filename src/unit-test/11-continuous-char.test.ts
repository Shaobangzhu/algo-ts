/**
 * @description Count and record the longest continuous char test
 * @author clu
 */
import { findContinuousChar1 } from "../11-continuous-char";

describe.only('Finds the character that appears most continuously in a string.', () => {
    it('functional test', () => {
        const res = findContinuousChar1('aaaaabbcccdddadddeeeaaaaaaaabbcba');
        expect(res).toEqual({ char: 'a', length: 8});
    })
    it('empty string', () => {
        const res = findContinuousChar1('');
        expect(res).toEqual({ char: '', length: 0});
    })
    it('no continuous char', () => {
        const res = findContinuousChar1('abcdefg');
        expect(res).toEqual({ char: 'a', length: 1});
    })
    it('all the same char', () => {
        const res = findContinuousChar1('aaaaaaaa');
        expect(res).toEqual({ char: 'a', length: 8});
    })
})