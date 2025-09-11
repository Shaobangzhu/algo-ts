import { ILinkedListNode, reverseLinkedList, createLinkedList} from "../../0-demo/4-reverse-linked-list";

describe('反转单向链表', () => {
    it('单个元素', () => {
        const node: ILinkedListNode = { value: 100 }
        const node1 = reverseLinkedList(node)
        expect(node1).toEqual({ value: 100 })
    })
    it('多个元素', () => {
        const node = createLinkedList([100, 200, 300])
        const node1 = reverseLinkedList(node)
        expect(node1).toEqual({
            value: 300,
            next: {
                value: 200,
                next: {
                    value: 100
                }
            }
        })
    })
})