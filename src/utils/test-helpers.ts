import ListNode from "./list-node";

// Helper function to create a linkedlist from an array
export function createLinkedList(values: number[]): ListNode | null {
  let head: ListNode | null = null;
  let current: ListNode | null = null;

  values.forEach((val) => {
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

// Helper function to create a linkedlist from an array but return a object instead of a ListNode
// The object contains both the head and tail reference, which makes it convenient when you need to
// later connect another list (e.g., when building two lists with a shared tail)
export function buildList(values: number[]): { head: ListNode | null; tail: ListNode | null } {
  if (values.length === 0) return { head: null, tail: null };
  const head = new ListNode(values[0]);
  let curr = head;
  for (let i = 1; i < values.length; i++) {
    curr.next = new ListNode(values[i]);
    curr = curr.next;
  }
  return { head, tail: curr };
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

/**
 * Build two lists that share a common tail.
 * A = prevA -> common
 * B = prevB -> common
 */
export function buildTwoListsWithCommonTail(
  preA: number[],
  preB: number[],
  common: number[]
): {
  headA: ListNode | null;
  headB: ListNode | null;
  commonHead: ListNode | null; // the node they intersect
} {
  const { head: commonHead } = buildList(common);
  const { head: headA, tail: tailA } = buildList(preA);
  const { head: headB, tail: tailB } = buildList(preB);

  if (tailA) tailA.next = commonHead;
  if (tailB) tailB.next = commonHead;

  // if pre part is empty, the head is the common head
  const finalHeadA = headA ?? commonHead;
  const finalHeadB = headB ?? commonHead;

  return { headA: finalHeadA, headB: finalHeadB, commonHead };
}

/**
 * Creates a cycle by linking last node to node at `pos` index (0-based)
 * @param head 
 * @param pos 
 */
export function createCycle(head: ListNode | null, pos: number): ListNode | null {
  if (!head || pos < 0) return head;

  let cycleEntry: ListNode | null = null;
  let cur = head;
  let idx = 0;

  while (cur.next) {
    if (idx === pos) cycleEntry = cur;
    cur = cur.next;
    idx++;
  }
  // connect tail -> cycleEntry
  if (cycleEntry) cur.next = cycleEntry;
  return head;
}

/**
 * This function is used to return the index of the target node
 * @param head 
 * @param target 
 */
export function nodeIndex(head: ListNode | null, target: ListNode | null): number {
  let idx = 0;
  // The condition: cur is short for cur !== null
  for (let cur = head; cur; cur = cur.next, idx++) {
    if (cur === target) return idx;
  }
  return -1;
}