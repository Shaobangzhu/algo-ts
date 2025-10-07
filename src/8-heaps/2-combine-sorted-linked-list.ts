import ListNode from "../utils/list-node";
import { PriorityQueue } from "../utils/priority-queue";

// smaller value = higher priority (min-heap)
const minHigher = (a: ListNode, b: ListNode) => a.val < b.val;

/**
 * Time Complexity: O(nlogk)
 * Space Complexity: O(k)
 * @param lists
 */
export function combineSortedLinkedList(
  lists: Array<ListNode | null>
): ListNode | null {
    const init: ListNode[] = [];
    for (const head of lists) if (head) init.push(head);

    const pq = new PriorityQueue<ListNode>(minHigher, init);

    const dummy = new ListNode(-1);
    let curr = dummy;

    while (pq.size() > 0) {
        const smallest = pq.pop()!;
        curr.next = smallest;
        curr = curr.next;

        if (smallest.next) pq.push(smallest.next);
    }

    return dummy.next;
}
