import ListNode from "./list-node";

// Helper function to create a linkedlist from an array
export function createLinkedList(values: number[]): ListNode | null {
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
export function linkedListToArray(head: ListNode | null): number[] {
    const result: number[] = [];
    let current: ListNode | null = head;

    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }

    return result;
}