import { merge } from "../../lc-29-easy/10-lc-merge-sorted-array";

describe("88. Merge Sorted Array", ()=>{
    it("nums1=[1,2,3,0,0,0], m=3, nums2=[2,5,6], n=3", ()=>{
        const nums1 = [1,2,3,0,0,0];
        const m = 3;
        const nums2 = [2,5,6];
        const n = 3;
        merge(nums1, m, nums2, n);
        expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
    });
    it("nums1=[1], m=1, nums2=[], n=0", ()=>{
        const nums1 = [1];
        const m = 1;
        const nums2: any[] = [];
        const n = 0;
        merge(nums1, m, nums2, n);
        expect(nums1).toEqual([1]);
    });
    it("nums1=[0], m=0, nums2=[1], n=1", ()=>{
        const nums1 = [0];
        const m = 0;
        const nums2 = [1];
        const n = 1;
        merge(nums1, m, nums2, n);
        expect(nums1).toEqual([1]);
    });
})