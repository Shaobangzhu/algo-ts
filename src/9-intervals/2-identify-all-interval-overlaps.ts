import { Interval } from "../utils/interval";
/**
 * Time Complexity: O(n + m) n, m are the lengths of intervals1 and intervals2, respectively
 * Space Complexity: O(1)
 * @param intervals1 
 * @param intervals2 
 */
export function identifyAllIntervalOverlaps(intervals1: Interval[], intervals2: Interval[]): Interval[] {
    const overlaps: Interval[] = [];
    let i = 0, j = 0;

    while (i < intervals1.length && j < intervals2.length) {
        // A starts first, B is the other
        let A: Interval, B: Interval;
        if (intervals1[i].start <= intervals2[j].start) {
            A = intervals1[i];
            B = intervals2[j];
        } else {
            A = intervals2[j];
            B = intervals1[i];
        }

        // Add overlap if any
        if (A.end >= B.start) {
            overlaps.push({ start: B.start, end: Math.min(A.end, B.end) });
        }

        // Advance the one that ends first
        if (intervals1[i].end < intervals2[j].end) {
            i += 1;
        } else {
            j += 1;
        }
    }

    return overlaps;
}