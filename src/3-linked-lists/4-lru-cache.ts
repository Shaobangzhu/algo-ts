import DoublyLinkedListNode from "../utils/doubly-linked-list-node";

export class LRUCache {
    private capacity: number;
    private map: Map<number, DoublyLinkedListNode>;

    // Dummy head/tail to avoid null checks on edges
    private head: DoublyLinkedListNode;
    private tail: DoublyLinkedListNode;

    constructor(capacity: number) {
        if (capacity <= 0 || !Number.isFinite(capacity)) {
            throw new Error("capcacity must be a positive finite integer");
        }

        this.capacity = capacity;
        this.map = new Map();

        this.head = new DoublyLinkedListNode(-1, -1);
        this.tail = new DoublyLinkedListNode(-1, -1);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    get(key: number): number {
        const node = this.map.get(key);
        if (!node) return -1;

        // Move the node to the tail (most recently used)
        this.removeNode(node);
        this.addToTail(node);
        return node.val;
    }

    put(key: number, value: number): void {
        if (this.map.has(key)) {
            // Remove existing node so we can reinsert as most-recent
            const existing = this.map.get(key)!;
            this.removeNode(existing);
            this.map.delete(key);
        }

        const node = new DoublyLinkedListNode(key, value);
        this.map.set(key, node);
        this.addToTail(node);

        if (this.map.size > this.capacity) {
            // Evict least recently used: it's head.next (first real node)
            const lru = this.head.next!;
            this.removeNode(lru);
            this.map.delete(lru.key);
        }
    }

    // ---- private helper ops on the doubly-linked list ----

    private addToTail(node: DoublyLinkedListNode): void {
        const prev = this.tail.prev!;
        // prev <-> node <-> tail
        node.prev = prev;
        node.next = this.tail;
        prev.next = node;
        this.tail.prev = node;
    }

    private removeNode(node: DoublyLinkedListNode): void {
        const p = node.prev!;
        const n = node.next!;
        p.next = n;
        n.prev = p;
        // optional: detach to help GC & catch bugs
        node.prev = null;
        node.next = null;
    }
}

export default LRUCache;