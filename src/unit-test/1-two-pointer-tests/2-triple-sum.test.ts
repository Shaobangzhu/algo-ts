import { tripletSum } from "../../1-two-pointers/2-triple-sum";

describe("2-triple-sum", ()=>{
    it("tests an empty array", ()=>{
        expect(tripletSum([])).toEqual([]);
    });
    it("tests a single-element array", ()=>{
        expect(tripletSum([0])).toEqual([]);
    });
    it("tests a two-element array", ()=>{
        expect(tripletSum([1, -1])).toEqual([]);
    });
    it("tests an array where all three of its values are the same", ()=>{
        expect(tripletSum([0, 0, 0])).toEqual([[0, 0, 0]]);
    });
    it("tests an array with no triplets that sum to 0", ()=>{
        expect(tripletSum([1, 0, 1])).toEqual([]);
    });
    it("tests an array with duplicate triplets", ()=>{
        expect(tripletSum([0, 0, 1, -1, 1, -1])).toEqual([[-1, 0, 1]]);
    });
});