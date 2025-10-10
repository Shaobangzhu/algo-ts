import { mergeOverlappingIntervals } from "../../9-intervals/1-merge-overlapping-intervals";
import { Interval } from "../../utils/interval";

describe('Merge Overlapping Intervals', () => {
    it('merges basic overlapping intervals', () => {
        const input: Interval[] = [
            { start: 1, end: 3 },
            { start: 2, end: 6 },
            { start: 8, end: 10 },
            { start: 15, end: 18 },
        ];
        expect(mergeOverlappingIntervals(input)).toEqual([
            { start: 1, end: 6 },
            { start: 8, end: 10 },
            { start: 15, end: 18 },
        ]);
    });

    it('merges when intervals just touch (end === start)', () => {
        const input: Interval[] = [
            { start: 1, end: 2 },
            { start: 2, end: 3 },
            { start: 3, end: 4 },
        ];
        expect(mergeOverlappingIntervals(input)).toEqual([{ start: 1, end: 4 }]);
    });

    it('handles contained intervals', () => {
        const input: Interval[] = [
            { start: 1, end: 10 },
            { start: 2, end: 3 },
            { start: 4, end: 6 },
            { start: 7, end: 9 },
        ];
        expect(mergeOverlappingIntervals(input)).toEqual([{ start: 1, end: 10 }]);
    });

    it('works with unsorted input', () => {
        const input: Interval[] = [
            { start: 5, end: 7 },
            { start: 1, end: 3 },
            { start: 2, end: 4 },
        ];

        expect(mergeOverlappingIntervals(input)).toEqual([
            { start: 1, end: 4 },
            { start: 5, end: 7 },
        ]);
    });

    it('returns empty for empty input', () => {
        expect(mergeOverlappingIntervals([])).toEqual([]);
    });

    it('single interval returns a copy (immutability)', () => {
        const input: Interval[] = [{ start: 1, end: 2 }];
        const out = mergeOverlappingIntervals(input);
        expect(out).toEqual([{ start: 1, end: 2 }]);
        expect(out).not.toBe(input); // not the same array
    });

    it('does not mutate original array or objects', () => {
        const input: Interval[] = [
            { start: 1, end: 4 },
            { start: 0, end: 2 },
        ];
        const snapshot = JSON.parse(JSON.stringify(input));
        mergeOverlappingIntervals(input);
        expect(input).toEqual(snapshot);
    });
});