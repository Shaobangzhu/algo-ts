import { climbStairs } from "../../lc-100-easy/14-lc-climbing-stairs";

describe("70. Climbing Stairs", ()=>{
    it('should return 1 for n = 0', () => {
        expect(climbStairs(0)).toBe(1);
    });

    it('should return 1 for n = 1', () => {
        expect(climbStairs(1)).toBe(1);
    });
    it('should return 55 for n = 9', () => {
        expect(climbStairs(9)).toBe(55);
    });
})