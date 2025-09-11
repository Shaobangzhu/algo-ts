import { linkedListMidpoint } from "../../4-fast-and-slow-pointers/2-linked-list-midpoint";
import { createLinkedList, nodeIndex } from "../../utils/test-helpers";

describe('Linked List Midpoint', () => {
    it('odd length -> exact middle', () => {
        const head = createLinkedList([1, 2, 3, 4, 5]);
        const mid = linkedListMidpoint(head);
        expect(mid?.val).toBe(3);
        expect(nodeIndex(head, mid)).toBe(2); // zero-based index
    });
    it('even length -> second middle', () => {
        const head = createLinkedList([1, 2, 3, 4]);
        const mid = linkedListMidpoint(head);
        expect(mid?.val).toBe(3);
        expect(nodeIndex(head, mid)).toBe(2);
    });
    it('two nodes -> second node', () => {
        const head = createLinkedList([10, 20]);
        const mid = linkedListMidpoint(head);
        expect(mid?.val).toBe(20);
    });
    it('single node -> itself', () => {
        const head = createLinkedList([42]);
        const mid = linkedListMidpoint(head);
        expect(mid?.val).toBe(42);
    });
    it('empty list -> null', () => {
        const mid = linkedListMidpoint(null);
        expect(mid).toBeNull();
    });
    it('longer list sanity', () => {
        const head = createLinkedList([1, 2, 3, 4, 5, 6, 7, 8]);
        const mid = linkedListMidpoint(head);
        expect(mid?.val).toBe(5);
    });
});