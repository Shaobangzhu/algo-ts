import ListNode from "../utils/list-node";

/**
 * Naive cycle detection using a visited set.
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param head 
 */
function hasCycleNaive(head: ListNode | null): boolean {
    const visited = new Set<ListNode>();
    let curr = head;

    while (curr) {
        if (visited.has(curr)) return true; // cycle detected
        visited.add(curr);
        curr = curr.next;
    }
    return false;
}

/**
 * Detects cycle in a linked list using Floyd's Tortoise & Have algorithm.
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param head
 */
export function hasCycleFloyd(head: ListNode | null): boolean {
    if (!head) return false;
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true; // cycle detected
        }
    }
    return false;
}