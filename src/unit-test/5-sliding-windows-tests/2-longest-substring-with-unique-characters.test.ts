import { longestSubstringWithUniqueChars, longestSubstringWithUniqueCharsOptimized } from "../../5-sliding-windows/2-longest-substring-with-unique-characters";

type Case = [input: string, expected: number];

const cases: Case[] = [
    ["abcabcbb", 3],  // "abc"
    ["bbbbb", 1],     // "b"
    ["pwwkew", 3],    // "wke"
    ["", 0],          // empty
    ["au", 2],        // all unique
    ["abba", 2],      // triggers left jump on repeat
    ["dvdf", 3],      // "vdf"
    ["tmmzuxt", 5],   // "mzuxt"
    ["anviaj", 5],    // "nviaj"
];

describe( "Longest Substring", () => {
    // test longestSubstringWithUniqueChars method
    it.each(cases)("input=%p -> %p", (input, expected) => {
        expect(longestSubstringWithUniqueChars(input)).toBe(expected);
    });

    // test longestSubstringWithUniqueCharsOptimized method
    it.each(cases)("input=%p -> %p", (input, expected) => {
        expect(longestSubstringWithUniqueCharsOptimized(input)).toBe(expected);
    });

    it("The two methods matches each other", () => {
        const alphabet = "abcdefg";
        for (let i = 0; i < 200; i++) {
            const len = Math.floor(Math.random() * 10);
            let s = "";
            for (let j = 0; j < len; j++) {
                s += alphabet[Math.floor(Math.random() * alphabet.length)];
            }
            expect(longestSubstringWithUniqueChars(s)).toBe(longestSubstringWithUniqueCharsOptimized(s));
        }
    });
});