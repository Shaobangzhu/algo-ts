import { mergeAlternatively } from "../../lc-200-easy/9-lc-merge-string-alternatively";

describe("1768. Merge Strings Alternately", ()=>{
    it("word1=abc, word2=pqr", ()=>{
        expect(mergeAlternatively("abc", "pqr")).toBe("apbqcr");
    });
    it("word1=ab, word2=pqrs", ()=>{
        expect(mergeAlternatively("ab", "pqrs")).toBe("apbqrs");
    });
    it("word1=abcd, word2=pq", ()=>{
        expect(mergeAlternatively("abcd", "pq")).toBe("apbqcd");
    });
});