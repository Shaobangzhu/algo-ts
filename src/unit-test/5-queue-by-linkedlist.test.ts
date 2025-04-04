/**
 * @description 用链表实现队列 test
 * @Shaobangzhu
 */

import { MyQueue } from "../5-queue-by-linkedlist";

describe('链表实现队列', () => {
    it('push and length', () => {
        const q = new MyQueue();
        expect(q.length).toBe(0);

        q.push(100);
        q.push(200);
        q.push(300);
        expect(q.length).toBe(3);
    })
    it('pop', () => {
        const q = new MyQueue();
        expect(q.pop()).toBeNull();

        q.push(100);
        q.push(200);
        q.push(300);
        expect(q.pop()).toBe(100);
        expect(q.pop()).toBe(200);
        expect(q.pop()).toBe(300);
        expect(q.pop()).toBeNull();
    });
    it('性能测试, 对比用数组和链表实现队列的性能', () => {
        const qByll = new MyQueue();
        console.time('queue by linkedlist');
        for (let i = 0; i < 10 * 10000; i++) {
            qByll.push(i);
        }

        for (let i = 0; i < 10 * 10000; i++) {
            qByll.pop();
        }
        console.timeEnd('queue by linkedlist');

        const qByArr = [];
        console.time('queue by array');
        for (let i = 0; i < 10 * 10000; i++) {
            qByArr.push(i);
        }

        for (let i = 0; i < 10 * 10000; i++) {
            qByArr.shift();
        }
        console.timeEnd('queue by array');
    });
});