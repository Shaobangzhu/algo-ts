import { mergeTwoLists } from "../../lc-100-easy/6-lc-merge-two-sorted-lists";
import ListNode from "../../utils/list-node";

// Helper: Convert array to linked list
function buildList(arr: number[]): ListNode | null {
  const dummy = new ListNode(0);
  let current = dummy;
  for (const num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummy.next;
}

// Helper: Convert linked list to array
function listToArray(head: ListNode | null): number[] {
    const result: number[] = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

describe("21.Merge Two Sorted Lists", () => {
  it("list1=[1,2,4], list2=[1,3,4]", () => {
    const l1 = buildList([1, 2, 4]);
    const l2 = buildList([1, 3, 4]);
    const result = mergeTwoLists(l1, l2);
    expect(listToArray(result)).toEqual([1,1,2,3,4,4]);
  });
  it("list1=[], list2=[]", () => {
    const l1 = buildList([]);
    const l2 = buildList([]);
    const result = mergeTwoLists(l1, l2);
    expect(listToArray(result)).toEqual([]);
  });
  it("list1=[], list2=[0]", () => {
    const l1 = buildList([]);
    const l2 = buildList([0]);
    const result = mergeTwoLists(l1, l2);
    expect(listToArray(result)).toEqual([0]);
  });
});
