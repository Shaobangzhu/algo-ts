import { maxProfit } from "../../lc-100-easy/8-lc-best-time-to-buy-and-sell-stock";

describe("121. Best Time to Buy and Sell Stock", ()=>{
    it("prices=[7, 1, 5, 3, 6, 4]", ()=>{
        expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
    });
    it("prices=[7, 6, 4, 3, 1]", ()=>{
        expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
    });
});