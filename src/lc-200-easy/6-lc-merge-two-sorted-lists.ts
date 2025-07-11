import ListNode from "../utils/list-node";

/**
 * 21. Merge Two Sorted Lists
 * Time Complexity: O(n + m), where n and m are the length of the two lists - each node is processed once
 * Space Complexity: O(1), rearranges pointers in-place, aside from the dummy node
 * @param list1
 * @param list2 
 */
export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const dummy = new ListNode(0);
    let current = dummy;

    while(list1 && list2) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    current.next = list1 !== null ? list1 : list2;
    
    return dummy.next;
}