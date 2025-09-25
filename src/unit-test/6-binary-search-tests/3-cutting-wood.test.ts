import { cuttingWood } from "../../6-binary-search/3-cutting-wood";

describe('cutting wood (upper-bound binary search)', ()=>{
    it('exact match to required wood', () => {
        // 20, 15, 10, 17 with H=15 -> (5 + 0 + 0 + 2) = 7
        const heights = [20, 15, 10, 17];
        expect(cuttingWood(heights, 7)).toBe(15);
    });
});