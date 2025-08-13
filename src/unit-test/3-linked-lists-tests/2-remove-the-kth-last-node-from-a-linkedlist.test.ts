import { createLinkedList, linkedListToArray } from "../../utils/test-helpers";
import { removeKthFromEnd } from "../../3-linked-lists/2-remove-the-kth-last-node-from-a-linkedlist";

describe('remove the kth last node from a linkedlist', ()=>{
    it('removes 2nd last node from end', ()=>{
        const head = createLinkedList([1, 2, 3, 4, 5]);
        const result = removeKthFromEnd(head, 2);
        expect(linkedListToArray(result)).toEqual([1, 2, 3, 5]);
    });

    it('removes the head when k equals the length', ()=>{
        const head = createLinkedList([10, 20, 30]);
        const result = removeKthFromEnd(head, 3);
        expect(linkedListToArray(result)).toEqual([20, 30]);
    });

    it('removes the tail when k = 1', ()=>{
        const head = createLinkedList([7, 8, 9]);
        const result = removeKthFromEnd(head, 1);
        expect(linkedListToArray(result)).toEqual([7, 8]);
    });

    it('single-node list: removing the only node yields null', () => {
        const head = createLinkedList([42]);
        const result = removeKthFromEnd(head, 1);
        expect(result).toBeNull();
    });

    it('k larger than length: list unchanged', ()=>{
        const head = createLinkedList([1, 2, 3]);
        const result = removeKthFromEnd(head, 5);
        expect(linkedListToArray(result)).toEqual([1, 2, 3]);
    });

    it('throws when k <= 0', ()=>{
        const head = createLinkedList([1, 2]);
        expect(()=>removeKthFromEnd(head, 0)).toThrow(/positive/);
        expect(()=>removeKthFromEnd(head, -1)).toThrow(/positive/);
    });

    it('works with empty list (null head): still null', ()=>{
        const result = removeKthFromEnd(null, 1);
        expect(result).toBeNull();
    });
});