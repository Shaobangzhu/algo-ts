/** Generic binary heap / priority queue */
class PriorityQueue<T> {
    private data: T[] = [];
    constructor(private higher: (a: T, b: T) => boolean, init?: T[]) {
        if(init && init.length) {
            this.data = init.slice();
            this.heapify();
        }
    }
    size(): number { return this.data.length; }
    peek(): T | undefined { return this.data[0]; }
    push(x: T): void {
        this.data.push(x);
        this.siftUp(this.data.length - 1);
    }
    pop(): T | undefined {
        const n = this.data.length;
        if (n === 0) return undefined;
        this.swap(0, n - 1);
        const out = this.data.pop()!;
        this.siftDown(0);
        return out;
    }

    /**
     * Convert the internal array `this.data` into a valid heap in O(n) time
     * Starting from the last non-leaf node down to the root,
     * we call siftDown() so that each subtree satisfies the heap property.
     * Time Complexity: O(n)
     */
    private heapify(): void {
        for (let i = Math.floor(this.data.length / 2) - 1; i >= 0; i--) {
            this.siftDown(i);
        }
    }

    /**
     * Restore heap property after inserting a new element at index i
     * Compare the element with its parent and swap while it has higher priority,
     * Repeats until reaching the root or heap property is satisfied.
     * Time Complexity: O(logn)
     * @param i 
     */
    private siftUp(i: number): void {
        while (i > 0) {
            const p = Math.floor((i - 1) / 2);
            if (this.higher(this.data[p], this.data[i])) break;
            this.swap(i, p);
            i = p;
        }
    }

    /**
     * Restore heap property after removing/replacing the root element
     * Compare the element at index with its children and swap with the better one
     * (higher priority child) until heap property is satisfied.
     * Time Complexity: O(logn)
     * @param i 
     */
    private siftDown(i: number): void {
        const n = this.data.length;
        while (true) {
            let best = i;
            const l = 2 * i + 1;
            const r = 2 * i + 2;
            if (l < n && this.higher(this.data[l], this.data[best])) best = l;
            if (r < n && this.higher(this.data[r], this.data[best])) best = r;
            if (best === i) break;
            this.swap(i, best);
            i = best;
        }
    }

    private swap(i: number, j: number): void {
        const tmp = this.data[i];
        this.data[i] = this.data[j];
        this.data[j] = tmp;
    }
}