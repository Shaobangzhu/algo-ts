import { PriorityQueue } from "../utils/priority-queue";

/**
 * Keep two heaps:
 *  - left: max-heap of the lower half
 *  - right: min-heap of the upper half
 * Invariant: left.size === right.size OR left.size === right.size + 1
 * Time complexity: Add: O(logn) Get_Median: O(1)
 * Space complexity: O(n)
 */
export class MedianOfAnIntegerStream {
    private left: PriorityQueue<number>; // max-heap
    private right: PriorityQueue<number>; // min-heap

    constructor() {
        this.left = new PriorityQueue<number>((a, b) => a > b); // max-heap
        this.right = new PriorityQueue<number>((a, b) => a < b); // min-heap
    }

    add(num: number): void {
        // If left is empty or num belongs to the left half, push to left.
        if (this.left.size() === 0 || num <= (this.left.peek() as number)) {
            this.left.push(num);

            // Rebalance if left too large (by > 1)
            if (this.left.size() > this.right.size() + 1) {
                this.right.push(this.left.pop() as number);
            }
        } else {
            // Otherwise push to right (upper half)
            this.right.push(num);

            // Rebalance if right larger than left
            if (this.right.size() > this.left.size()) {
                this.left.push(this.right.pop() as number);
            }
        }
    }

    getMedian(): number {
        if (this.left.size() === 0) return NaN;

        if (this.left.size() === this.right.size()) {
            // Even count: average the two tops
            const a = this.left.peek() as number;
            const b = this.right.peek() as number;
            return (a + b) / 2;
        }
        // Odd count: top of max-heap (left)
        return this.left.peek() as number;
    }
}