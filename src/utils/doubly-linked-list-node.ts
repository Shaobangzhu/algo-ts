class DoublyLinkedListNode {
    key: number;
    val: number;
    next: DoublyLinkedListNode | null = null;
    prev: DoublyLinkedListNode | null = null;

    constructor(key: number, val: number) {
        this.key = key;
        this.val = val;
    }
}

export default DoublyLinkedListNode;