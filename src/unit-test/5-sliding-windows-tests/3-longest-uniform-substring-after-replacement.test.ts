import { longestUniformSubstringAfterReplacements } from "../../5-sliding-windows/3-longest-uniform-substring-after-replacement";

describe("Longest Uniform Substring After Replacements", () => {
    it("handles empty and single-char strings", () => {
        expect(longestUniformSubstringAfterReplacements("", 3)).toBe(0);
        expect(longestUniformSubstringAfterReplacements("a", 0)).toBe(1);
    });

    it("no replacements allowed (k = 0)", () => {
        expect(longestUniformSubstringAfterReplacements("aaaabac", 0)).toBe(4);
    });

    it("classic examples", () => {
        expect(longestUniformSubstringAfterReplacements("ABAB", 2)).toBe(4);
    });

    it("k >= length of string gives full length", () => {
        expect(longestUniformSubstringAfterReplacements("abcd", 10)).toBe(4);
    });
});