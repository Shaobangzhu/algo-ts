import ListNode from "../utils/list-node";

/**
 * Time Complexity: O(n+m), where n and m denotes the length of list A and B
 * Space Complexity: O(1)
 * @param headA
 * @param headB
 */
export function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
    // If either list is empty, they cannot intersect.
    if (!headA || !headB) return null;

    let pA: ListNode | null = headA;
    let pB: ListNode | null = headB;

    // when a pointer reaches the end, jump to the head of the other list.
    // If there is an intersection, the pointers will meet there.
    // If not, both will eventually become null at the same time.
    while(pA !== pB) {
        pA = pA ? pA.next : headB;
        pB = pB ? pB.next : headA;
    }

    return pA; // either the intersection node or null
}
