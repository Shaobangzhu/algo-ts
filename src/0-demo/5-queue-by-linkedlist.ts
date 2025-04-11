/**
 * @description 用链表实现队列
 * @Shaobangzhu
 */

interface IListNode {
    value: number
    next: IListNode | null
}

export class MyQueue {
    private _head: IListNode | null = null;
    private _tail: IListNode | null = null;
    private _len = 0;

    /**
     * 入队, 在tail位置
     * @param n number
     */
    push(n: number) {
        const newNode: IListNode = {
            value: n,
            next: null
        };

        // 处理 head
        if (this._head == null) {
            this._head = newNode;
        }

        // 处理 tail
        const tailNode = this._tail;
        if (tailNode) {
            tailNode.next = newNode;
        }
        this._tail = newNode;

        // 记录长度
        this._len++;
    }

    /**
     * 出队, 在head位置
     */
    pop(): number | null {
        const headNode = this._head;
        if (headNode == null) return null;
        if (this._len <= 0) return null;

        // 取值
        const value = headNode.value;

        // 处理head
        this._head = headNode.next;

        // 记录长度
        this._len--;

        return value;
    }

    get length(): number {
        // length 要单独存储, 不能遍历链表来获取 (否则时间复杂度太高 O(n))
        return this._len;
    }
}