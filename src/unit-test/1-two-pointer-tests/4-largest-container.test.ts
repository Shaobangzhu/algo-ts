import { largestContainer } from "../../1-two-pointers/4-largest-container";

describe("Largest Container", ()=>{
    it("tests an empty array", ()=>{
        expect(largestContainer([])).toBe(0);
    });
    it("tests an array with just one element", ()=>{
        expect(largestContainer([1])).toBe(0);
    });
    it("tests an array with no containers that can contain water", ()=>{
        expect(largestContainer([0, 1, 0])).toBe(0);
    });
    it("tests an array with all heights are the same", ()=>{
        expect(largestContainer([3, 3, 3, 3])).toBe(9);
    });
    it("tests an array with strictly increasing heights", ()=>{
        expect(largestContainer([1, 2, 3])).toBe(2);
    });
    it("tests an array with strictly descreasing heights", ()=>{
        expect(largestContainer([3, 2, 1])).toBe(2);
    })
})