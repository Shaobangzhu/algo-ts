import { countLargestGroup } from "../../lc-29-easy/19-lc-count-largest-group";

describe("1399. Count Largest Group", ()=>{
    it("returns 4 for n = 13", ()=>{
        expect(countLargestGroup(13)).toBe(4);
    });
    it("returns 2 for n = 2", ()=>{
        expect(countLargestGroup(2)).toBe(2);
    });
    it("returns 6 for n = 15", ()=>{
        expect(countLargestGroup(15)).toBe(6);
    });
    it("returns 6 for n = 24", ()=>{
        expect(countLargestGroup(24)).toBe(5);
    })
    it("handles n = 1", ()=>{
        expect(countLargestGroup(1)).toBe(1);
    });
    it("handles n = 1000", ()=>{
        // just verify that it runs without timeout or crash
        const result = countLargestGroup(1000);
        expect(typeof result).toBe('number');
        expect(result).toBeGreaterThan(0);
    });
});