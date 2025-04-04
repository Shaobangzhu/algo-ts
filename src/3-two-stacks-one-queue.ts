/**
 * 用两个栈来实现一个队列
 * 时间复杂度: add O(1); delete O(n)
 * 空间复杂度, 整体是O(n)
 */
export class MyQueue {
    private _stack1: number[] = []
    private _stack2: number[] = []

    /**
     * 将一个元素加入队列
     * @param n 
     */
    add(n: number) {
        this._stack1.push(n)
    }

    /**
     * 移除元素出队列
     * @returns 
     */
    delete(): number | null {
        let res 

        const stack1 = this._stack1
        const stack2 = this._stack2

        // 将stack1中的所有元素移动到stack2
        while(stack1.length) {
            const num = stack1.pop()
            if (num != null) {
                stack2.push(num)
            }
        }

        // stack2 pop
        res = stack2.pop()

        // 将 stack2 所有元素"还给"stack1
        while(stack2.length) {
            const num = stack2.pop()
            if (num != null) {
                stack1.push(num)
            }
        }

        return res || null
    }

    // 获取一个队列大小
    get length(): number {
        return this._stack1.length
    }
}