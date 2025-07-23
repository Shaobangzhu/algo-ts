import { moveZeros } from "../../lc-29-easy/24-lc-move-zeros";

describe("283.Move Zeros", ()=>{
    it("case 1", ()=>{
        const nums = [0, 1, 0, 3, 12];
        moveZeros(nums);
        expect(nums).toEqual([1, 3, 12, 0, 0]);
    });

    it("all zero", ()=>{
        const nums = [0, 0, 0];
        moveZeros(nums);
        expect(nums).toEqual([0, 0, 0]);
    });

    it("no zero", ()=>{
        const nums = [1, 2, 3];
        moveZeros(nums);
        expect(nums).toEqual([1, 2, 3]);
    });
});