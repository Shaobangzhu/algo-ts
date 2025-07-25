import { isValidParentheses } from "../../lc-29-easy/5-lc-valid-parentheses";

describe("valid parenthese", ()=>{
    it("input is ()", ()=>{
        expect(isValidParentheses("()")).toBeTruthy();
    });
     it("input is ()[]{}", ()=>{
        expect(isValidParentheses("()[]{}")).toBeTruthy();
    });
     it("input is (]", ()=>{
        expect(isValidParentheses("(]")).toBeFalsy();
    });
     it("input is ([])", ()=>{
        expect(isValidParentheses("([])")).toBeTruthy();
    });
});