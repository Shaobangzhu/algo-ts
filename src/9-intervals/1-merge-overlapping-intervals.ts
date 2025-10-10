import { Interval } from "../utils/interval";

/**
 * Merge all overlapping intervals.
 * Time Complexity: O(nlogn)
 * Space Complexity: O(n)
 * @param intervals 
 */
export function mergeOverlappingIntervals(intervals: Interval[]): Interval[] {
    if (intervals.length <= 1) return intervals.slice(); // keep input immutable

    // Work on a copy so we don't mutate caller data
    const sorted = intervals.slice().sort((a, b) => a.start - b.start);
    const merged: Interval[] = [ { ...sorted[0] } ];


    for(let i = 1; i < sorted.length; i++) {
        const B = sorted[i];
        const A =merged[merged.length - 1];

        if (A.end < B.start) {
            // No overlap -> add B
            merged.push({ ...B });
        } else {
            // Overlap (including touching) -> merge A with B
            A.end = Math.max(A.end, B.end);
        }
    }

    return merged;
}