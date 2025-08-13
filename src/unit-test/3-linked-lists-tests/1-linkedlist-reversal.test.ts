import { linkedListReversal } from "../../3-linked-lists/1-linkedlist-reversal";
import { createLinkedList, linkedListToArray } from "../../utils/test-helpers";

describe('linkedListReversal', () => {
    it('should return null for an empty list', ()=>{
        expect(linkedListReversal(null)).toBeNull();
    });

    it('should return the same list for a single element list', ()=>{
        const singleNodeList = createLinkedList([1]);
        const reversed = linkedListReversal(singleNodeList);
        expect(linkedListToArray(reversed)).toEqual([1]);
    });

    it('should reverse a list of multiple elements', ()=>{
        const list = createLinkedList([1, 2, 3, 4]);
        const reversed = linkedListReversal(list);
        expect(linkedListToArray(reversed)).toEqual([4, 3, 2, 1]);
    });
});