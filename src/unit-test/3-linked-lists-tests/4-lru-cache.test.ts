import LRUCache from "../../3-linked-lists/4-lru-cache";

describe("LRU Cache", ()=>{
    it("basic get/put and eviction order", () => {
        const lru = new LRUCache(2);
        lru.put(1, 1); // cache: [1]
        lru.put(2, 2); // cache: [1, 2]
        expect(lru.get(1)).toBe(1); // cache order become [2, 1]
        lru.put(3, 3); // evict key 2, cache: [1, 3]
        expect(lru.get(2)).toBe(-1);
        lru.put(4, 4); // evict key 1, cache: [3, 4]
        expect(lru.get(1)).toBe(-1);
        expect(lru.get(3)).toBe(3);
        expect(lru.get(4)).toBe(4);
    });

    it("overite existing key updates value and recency", () => {
        const lru = new LRUCache(2);
        lru.put(1, 10);
        lru.put(2, 20);
        lru.put(1, 15);  // update key 1; it becomes most recent used
        expect(lru.get(1)).toBe(15);
        lru.put(3, 30);  // should evict key 2, not 1
        expect(lru.get(2)).toBe(-1);
        expect(lru.get(3)).toBe(30);
    });

    it("invalid capacity throws", () => {
        expect(()=>new LRUCache(0)).toThrow();
        expect(()=>new LRUCache(-5)).toThrow();
    });
});