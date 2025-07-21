import { validPalindromeii } from "../../lc-100-easy/11-lc-valid-palindrome-ii";

describe("680. Valid Palindrome II", ()=>{
    it("s=aba, output is true",()=>{
        expect(validPalindromeii("aba")).toBeTruthy();
    });
    it("s=abca, output is true",()=>{
        expect(validPalindromeii("abca")).toBeTruthy();
    });
    it("s=abc, output is true",()=>{
        expect(validPalindromeii("abc")).toBeFalsy();
    });
});