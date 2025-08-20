import { getIntersectionNode } from "../../3-linked-lists/3-linkedlist-intersection";
import { buildList, buildTwoListsWithCommonTail } from "../../utils/test-helpers";

describe("LinkedList Intersection", ()=>{
    it("classic case", ()=>{
        // A: 4 -> 2 -> 8 -> 4 -> 5
        // B: 5 -> 6 -> 1 -> 8 -> 4 -> 5
        const { headA, headB, commonHead } = buildTwoListsWithCommonTail(
            [4, 2],
            [5, 6, 1],
            [8, 4, 5]
        );
        
        const res = getIntersectionNode(headA, headB);
        expect(res).toBe(commonHead);
        expect(res?.val).toBe(8);
    });

    it("no intersection (disjoint lists)", () => {
        const { head: headA } = buildList([1, 2, 3]);
        const { head: headB } = buildList([4, 5, 6]);

        const res = getIntersectionNode(headA, headB);
        expect(res).toBeNull();
    });

    it("one list is empty", () => {
        const { head: headA } = buildList([1, 2, 3]);
        const res = getIntersectionNode(headA, null);
        expect(res).toBeNull();
    });

    it("both lists are empty", () => {
        const res = getIntersectionNode(null, null);
        expect(res).toBeNull();
    });
});