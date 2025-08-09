import ListNode from "../utils/list-node";

/**
 * Linked List Reversal
 * Time Complexity:
 * Space Complexity:
 * @param head 
 */
export function linkedListReversal(head: ListNode | null): ListNode | null {
    let prevNode: ListNode | null = null;
    let currNode: ListNode | null = head;

    while(currNode !== null) {
        const nextNode: ListNode | null = currNode.next;
        currNode.next = prevNode;
        prevNode = currNode;
        currNode = nextNode;
    }

    return prevNode;
}

function linkedListReversalRecursive(head: ListNode | null): ListNode | null {
    // Base case
    if (head === null || head.next === null) {
        return head;
    }

    // Recursive reversal of the rest of the list
    const newHead = linkedListReversalRecursive(head.next);

    head.next.next = head;
    head.next = null;

    return newHead;
}