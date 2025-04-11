export interface ILinkedListNode {
    value: number
    next?: ILinkedListNode
}

/**
 * 反转单向链表, 并返回反转之后的 head node
 * @param listNode list head node
 */
export function reverseLinkedList(listNode: ILinkedListNode): ILinkedListNode {
    // 定义三个指针
    let prevNode: ILinkedListNode | undefined = undefined
    let curNode: ILinkedListNode | undefined = undefined
    let nextNode: ILinkedListNode | undefined = listNode

    // 以 nextNode 为主, 遍历链表
    while(nextNode) {
        // 第一个元素, 删掉 next, 防止循环引用
        if (curNode && !prevNode) {
            // @ts-ignore
            delete curNode.next
        }

        // 反转指针
        if (curNode && prevNode) {
            // @ts-ignore
            curNode.next = prevNode
        }

        // 整体向后移动指针
        prevNode = curNode
        curNode = nextNode
        nextNode = nextNode?.next
    }

    // 当nextNode为空时, 此时 curNode 尚未设置 next
    curNode!.next = prevNode

    return curNode!
}

/**
 * 根据数组创建链表
 * @param arr number arr
 */
export function createLinkedList(arr: number[]): ILinkedListNode {
    const length = arr.length
    if (length === 0) throw new Error('arr is empty')

    // arr: [100, 200, 300]
    // { value: 300 }
    // { value: 200, next: { value: 300 } }
    // { value: 100, next: { value: 200, next: { value: 300 } } } 
    let curNode: ILinkedListNode = {
        value: arr[length - 1]
    }
    if (length === 1) return curNode

    for (let i = length - 2; i >= 0; i--) {
        curNode = {
            value: arr[i],
            next: curNode
        }
    }

    return curNode
}