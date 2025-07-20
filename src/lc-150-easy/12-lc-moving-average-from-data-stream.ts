/**
 * 346. Moving Average from Data Stream
 * Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window
 */

/**
 * Brutal Force
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
export class MovingAverage1 {
    private  queue: number[] = [];
    private  size: number;

    constructor(size: number) {
        this.size = size;
    }

    next(val: number): number {
        this.queue.push(val);
        if(this.queue.length > this.size){
            this.queue.shift();
        }
        const sum = this.queue.reduce((x, y)=> x + y, 0);
        return sum / this.queue.length; // 注: 这里的分母不是this.size, 因为当滑动窗口没有填满的时候,分母小于size
    }
}

/**
 * Sliding Sum: 用一个queue来记录窗口中的数字，同时维护一个sum来记录当前窗口的总和
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
export class MovingAverage2 {
    private queue: number[] = [];
    private size: number;
    private sum: number = 0;

    constructor(size: number) {
        this.size = size;
    }

    next(val: number): number {
        this.queue.push(val);
        this.sum += val;
        if(this.queue.length > this.size){
            const removed = this.queue.shift()!;
            this.sum -= removed;
        }

        return this.sum / this.queue.length;
    }
}