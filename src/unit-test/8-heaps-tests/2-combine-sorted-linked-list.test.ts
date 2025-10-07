import { combineSortedLinkedList } from "../../8-heaps/2-combine-sorted-linked-list";
import ListNode from "../../utils/list-node";
import { createLinkedList, linkedListToArray } from "../../utils/test-helpers";

describe('combine sorted linked lists', () => {
    it('merges three sorted lists', () => {
        const lists = [
            createLinkedList([1, 4, 5]),
            createLinkedList([1, 3, 4]),
            createLinkedList([2, 6]),
        ];
        const merged = combineSortedLinkedList(lists);
        expect(linkedListToArray(merged)).toEqual([1, 1, 2, 3, 4, 4, 5, 6]);
    });

    it('handles empty lists among inputs', () => {
        const lists = [
            createLinkedList([]),
            createLinkedList([0]),
            createLinkedList([]),
        ];
        const merged = combineSortedLinkedList(lists);
        expect(linkedListToArray(merged)).toEqual([0]);
    });

    it('returns null when all lists are null/empty', () => {
        const lists: Array<ListNode | null> = [null, null, null];
        const merged = combineSortedLinkedList(lists);
        expect(merged).toBeNull();
    });

    it('single list returns itself', () => {
        const list = createLinkedList([1, 2, 3]);
        const merged = combineSortedLinkedList([list]);
        expect(linkedListToArray(merged)).toEqual([1, 2, 3]);
    });

    it('works with duplicates and negative numbers', () => {
        const lists = [
            createLinkedList([-3, -1, 2]),
            createLinkedList([-2, -2, 3]),
            createLinkedList([]),
        ];
        const merged = combineSortedLinkedList(lists);
        expect(linkedListToArray(merged)).toEqual([-3, -2, -2, -1, 2, 3]);
    });
});