import { linkedListReversal } from "../../3-linked-lists/1-linkedlist-reversal";
import ListNode from "../../utils/list-node";

// Helper function to create a linkedlist from an array
function createLinkedList(values: number[]): ListNode | null {
    let head: ListNode | null = null;
    let current: ListNode | null = null;

    values.forEach(val => {
        const newNode: ListNode = { val, next: null };
        if (head == null) {
            head = newNode;
            current = head;
        } else {
            current!.next = newNode;
            current = current!.next;
        }
    });

    return head;
}

// Helper function to convert a linked list to an array
function linkedListToArray(head: ListNode | null): number[] {
    const result: number[] = [];
    let current: ListNode | null = head;

    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }

    return result;
}

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