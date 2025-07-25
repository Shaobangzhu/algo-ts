import { isPalindromeValid } from "../../1-two-pointers/3-is-palindrome-valid";

describe("Is Palindrome Valid", ()=>{
    it("tests an empty string", ()=>{
        expect(isPalindromeValid("")).toBeTruthy();
    });
    it("tests a single-character string", ()=>{
        expect(isPalindromeValid("a")).toBeTruthy();
    });
    it("tests a palindrone with two characters", ()=>{
        expect(isPalindromeValid("aa")).toBeTruthy();
    });
    it("tests a non-palindrone with two characters", ()=>{
        expect(isPalindromeValid("ab")).toBeFalsy();
    });
    it("tests a string with no alphanumeric characters", ()=>{
        expect(isPalindromeValid("!, (?)")).toBeTruthy();
    });
    it("tests a palindrome with punctuation and numbers", ()=>{
        expect(isPalindromeValid("12.02.2021")).toBeTruthy();
    });
    it("tests a non-palindrome with punctuation and numbers", ()=>{
        expect(isPalindromeValid("21.02.2021")).toBeFalsy();
    });
    it("tests a non-palindrome with punctuation", ()=>{
        expect(isPalindromeValid("hello, world!")).toBeFalsy();
    });
});