import { kMostFrequentStringsMaxHeap, kMostFrequentStringsMinHeap } from "../../8-heaps/1-k-most-frequent";

describe('k most frequent strings', () => {
    it('basic sample with tie -> lexicographical order', () => {
        const strs = ['i', 'love', 'leetcode', 'i', 'love', 'coding'];
        const k = 2;
        expect(kMostFrequentStringsMaxHeap(strs, k)).toEqual(['i', 'love']);
        expect(kMostFrequentStringsMinHeap(strs, k)).toEqual(['i', 'love']);
    });

    it('large sample', () => {
        const strs = ['the', 'day', 'is', 'sunny', 'the', 'the', 'the', 'sunny', 'is', 'is'];
        const k = 4;
        expect(kMostFrequentStringsMaxHeap(strs, k)).toEqual(['the', 'is', 'sunny', 'day']);
        expect(kMostFrequentStringsMinHeap(strs, k)).toEqual(['the', 'is', 'sunny', 'day']);
    });

    it('k equals unique count', () => {
        const strs = ['a', 'b', 'c', 'a'];
        const k = 3;
        expect(kMostFrequentStringsMaxHeap(strs, k)).toEqual(['a', 'b', 'c']);
        expect(kMostFrequentStringsMinHeap(strs, k)).toEqual(['a', 'b', 'c']);
    });

    it('edge case: k <= 0', () => {
        expect(kMostFrequentStringsMaxHeap(['a', 'a'], 0)).toEqual([]);
        expect(kMostFrequentStringsMinHeap(['a', 'a'], 0)).toEqual([]);
    })
});