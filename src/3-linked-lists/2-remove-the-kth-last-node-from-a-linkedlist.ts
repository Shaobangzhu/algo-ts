import ListNode from "../utils/list-node";

/**
 * Remove the k-th node from the end of a singly linked list.
 * @param head
 * @param k 
 */
export function removeKthFromEnd(
    head: ListNode | null,
    k: number
): ListNode | null {
    if(k <= 0) throw new Error("k must be a positive integer");

    // Dummy node to simplify removal (works even when removing the head)
    const dummy = new ListNode(-1, head);

    let leader: ListNode | null = dummy;
    let trailer: ListNode | null = dummy;

    for (let i = 0; i < k; i++) {
        leader = leader!.next;
        // if k exceeds the list length, nothing to remove
        if (!leader) return head;
    }

    while(leader!.next) {
        leader = leader.next;
        trailer = trailer!.next;
    }

    // trailer now is right before the node to remove
    if (trailer && trailer.next) {
        trailer.next = trailer.next.next;
    }

    return dummy.next;
}