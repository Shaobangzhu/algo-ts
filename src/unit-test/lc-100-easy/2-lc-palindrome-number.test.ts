import { isPalindrome } from "../../lc-100-easy/2-lc-palindrome-number";

describe("Given an integer x, return true if x is palindrome", () => {
    it("input is 121, 121 is a Palindrome", () => {
        expect(isPalindrome(121)).toBeTruthy;
    });
    it("input is -121, -121 is not a Palindrome", () => {
        expect(isPalindrome(-121)).toBeFalsy;
    });
    it("input is 10, 10 is not a Palindrome", () => {
        expect(isPalindrome(10)).toBeFalsy;
    });
});