class ListNode {
    public val: number = 0;
    public next: ListNode | null = null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = val ?? 0; // this.val = (val === undefined ? 0 : val)
        this.next = next ?? null; // this.next = (next === undefined ? null : next)
    }
}

export default ListNode;