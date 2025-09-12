import { substringAnagrams } from "../../5-sliding-windows/1-substring-anagrams";

describe('Substring Anagrams', () => {
    it('counts typical cases', () => {
        expect(substringAnagrams('cbaebabacd', 'abc')).toBe(2);
        expect(substringAnagrams('abab', 'ab')).toBe(3);
    });
    it('returns 0 when no anagram exists', () => {
        expect(substringAnagrams('abcdef', 'zzz')).toBe(0);
    });
    it('returns 0 when t is longer than s', () => {
        expect(substringAnagrams('ab', 'abcd')).toBe(0);
        expect(substringAnagrams('', 'a')).toBe(0);
    });
    it('handles repeated letters correctly', () => {
        expect(substringAnagrams('aaabaaa', 'aaa')).toBe(2);
    });
    it('works when every window is an anagram', () => {
        expect(substringAnagrams('aaaaa', 'aa')).toBe(4);
    });
    it('single-character patterns', () => {
        expect(substringAnagrams('abcabc', 'a')).toBe(2);
        expect(substringAnagrams('zzzzz', 'z')).toBe(5);
    });
    it('empty pattern counts as 0', () => {
        expect(substringAnagrams('anything', '')).toBe(0);
    });
});