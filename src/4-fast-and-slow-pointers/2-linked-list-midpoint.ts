import ListNode from "../utils/list-node";

/**
 * Returns the midpoint of a singly linked list.
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param head 
 */
export function linkedListMidpoint(head: ListNode | null): ListNode | null {
    if (!head) return null;

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    // Stop when fast reaches the end (null) or fast.next is null.
    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;
    }
    return slow; // "slow" now points at midpoint (second middle if even length)
}