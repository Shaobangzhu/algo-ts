import { Interval } from "../utils/interval";
/**
 * Time Complexity: O(nlogn)
 * Space Complexity: O(n)
 * @param intervals 
 */
export function largestOverlapOfIntervals(intervals: Interval[]): number {
    // Collect start/end "events"
    type Event = { t: number; kind: 'S' | 'E' };
    const events: Event[] = [];
    for (const iv of intervals) {
        events.push({ t: iv.start, kind: 'S' });
        events.push({ t: iv.end, kind: 'E' });
    }

    // Sort chronologically; for ties, process 'E' before 'S'
    const order: Record<'E' | 'S', number> = { E: 0, S: 1 };
    events.sort((a, b) => (a.t === b.t ? order[a.kind] - order[b.kind] : a.t - b.t));

    // Sweep
    let active = 0;
    let maxOverlap = 0;
    for (const e of events) {
        if (e.kind === 'S') {
            active += 1;
        } else {
            active -= 1;
        }
        if (active > maxOverlap) maxOverlap = active;
    }
    return maxOverlap;
}