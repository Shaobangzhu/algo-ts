import ListNode from "../../utils/list-node";
import { hasCycleFloyd } from "../../4-fast-and-slow-pointers/1-linked-list-loop";
import { createCycle, createLinkedList } from "../../utils/test-helpers";


describe('Linked list cycle detection', () => {
  test('no cycle -> both return false', () => {
    const head = createLinkedList([1, 2, 3, 4, 5]);
    expect(hasCycleFloyd(head)).toBe(false);
  });

  test('single node with no cycle', () => {
    const head = new ListNode(1);
    expect(hasCycleFloyd(head)).toBe(false);
  });

  test('single node with cycle to itself', () => {
    const head = new ListNode(1);
    head.next = head; // self loop
    expect(hasCycleFloyd(head)).toBe(true);
  });

  test('multi-node cycle', () => {
    const head = createLinkedList([3, 2, 0, -4]);
    createCycle(head, 1); // last node points to index 1 (value 2)
    expect(hasCycleFloyd(head)).toBe(true);
  });

  test('two nodes no cycle', () => {
    const head = createLinkedList([10, 20]);
    expect(hasCycleFloyd(head)).toBe(false);
  });

  test('two nodes cycle to head', () => {
    const head = createLinkedList([10, 20]);
    createCycle(head, 0);
    expect(hasCycleFloyd(head)).toBe(true);
  });
});