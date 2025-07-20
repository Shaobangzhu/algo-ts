import { romanToInt } from "../../lc-150-easy/3-lc-roman-to-integer"

describe("transform roman to interger number", ()=>{
    it("input string is III", ()=>{
        expect(romanToInt("III")).toBe(3);
    });
    it("input string is LVIII", ()=>{
        expect(romanToInt("LVIII")).toBe(58);
    });
    it("input string is MCMXCIV", ()=>{
        expect(romanToInt("MCMXCIV")).toBe(1994);
    });
})