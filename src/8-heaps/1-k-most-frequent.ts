import { Pair } from "../utils/pair";
import { PriorityQueue } from "../utils/priority-queue";

/**
 * Max-heap version: heapify all pairs, then pop k times
 * Time Complexity: O(n + klogn)
 * Space Complexity: O(n)
 * @param strs 
 * @param k 
 */
export function kMostFrequentStringsMaxHeap(strs: string[], k: number): string[] {
    if (k <= 0) return [];
    const freqs = countFreq(strs);
    const items: Pair[] = Array.from(freqs, ([str, freq]) => ({ str, freq }));
    const pq = new PriorityQueue<Pair>(maxHeapHigher, items);
    const res: string[] = [];
    for (let i = 0; i < k && pq.size() > 0; i++) {
        res.push(pq.pop()!.str);
    }
    return res;
}

/**
 * Min-heap (size k) version: push; if size > k, pop one; finally pop k and reverse
 * Time Complexity: O(nlog(k))
 * Space Complexity: O(n)
 * @param strs 
 * @param k 
 */
export function kMostFrequentStringsMinHeap(strs: string[], k: number): string[] {
    if (k <= 0) return [];
    const freqs = countFreq(strs);
    const pq = new PriorityQueue<Pair>(minHeapHigher); //注意这一步和maxHeap的区别
    for (const [str, freq] of freqs) {
        pq.push({ str, freq });
        if (pq.size() > k) pq.pop(); // remove worst so far
    }
    const out: string[] = [];
    while (pq.size() > 0) out.push(pq.pop()!.str);
    out.reverse();
    return out;
}

/** Build frequency map */
function countFreq(strs: string[]): Map<string, number> {
    const m = new Map<string, number>();
    for (const s of strs) m.set(s, (m.get(s) ?? 0) + 1);
    return m;
}

/** Comparator helpers (lexicographical tie-break) */
function maxHeapHigher(a: Pair, b: Pair): boolean {
    // higher priority if freq bigger; if tie, lexicographically smaller
    if (a.freq !== b.freq) return a.freq > b.freq;
    return a.str < b.str;
}

function minHeapHigher(a: Pair, b: Pair): boolean {
    // invert priority for a min-heap that eject the "worst" (lowest frq,
    // and for ties lexicographically LARGER as worse)
    if (a.freq !== b.freq) return a.freq < b.freq;
    return a.str > b.str;
}