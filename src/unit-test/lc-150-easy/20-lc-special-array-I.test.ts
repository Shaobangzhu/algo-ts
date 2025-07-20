import { isArraySpecial } from "../../lc-150-easy/20-lc-special-array-I";

describe("3151. Special Array I", ()=>{
    test('Example 1: [1, 2, 3, 4]', () => {
        expect(isArraySpecial([1, 2, 3, 4])).toBe(true);
    });

    test('Example 2: [2, 4, 6]', () => {
        expect(isArraySpecial([2, 4, 6])).toBe(false);
    });

    test('Edge Case: [1]', () => {
        expect(isArraySpecial([1])).toBe(true);  // no adjacent elements
    });

    test('Alternating odd-even', () => {
        expect(isArraySpecial([2, 3, 4, 5, 6])).toBe(true);
    });

    test('Same parity in middle', () => {
        expect(isArraySpecial([1, 2, 4, 5])).toBe(false);
    });
});