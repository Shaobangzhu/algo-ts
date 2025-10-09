import { MedianOfAnIntegerStream } from "../../8-heaps/3-median-of-an-integer-stream";
import { naiveMedian } from "../../utils/test-helpers";

describe('Median of An Integer Stream', () => {
    it('empty stream returns NaN', () => {
        const stream = new MedianOfAnIntegerStream();
        expect(Number.isNaN(stream.getMedian())).toBe(true);
    });

    it('basic odd/even sequence', () => {
        const stream = new MedianOfAnIntegerStream();

        stream.add(5);
        expect(stream.getMedian()).toBe(5);

        stream.add(2);
        expect(stream.getMedian()).toBe(3.5);

        stream.add(10);
        expect(stream.getMedian()).toBe(5);

        stream.add(3);
        expect(stream.getMedian()).toBe(4);

        stream.add(8);
        expect(stream.getMedian()).toBe(5);
    });

    it('handles negatives and duplicates', () => {
        const stream = new MedianOfAnIntegerStream();
        const seq = [-1, -1, -1, 0, 0, 2, 2, 2];
        const numbersSoFar: number[] = [];

        for (const x of seq) {
            stream.add(x);
            numbersSoFar.push(x);
            expect(stream.getMedian()).toBe(naiveMedian(numbersSoFar));
        }
    });

    it('monotonic increasing stream', () => {
        const stream = new MedianOfAnIntegerStream();
        const numbersSoFar: number[] = [];
        for (let i = 1; i <= 10; i++) {
            stream.add(i);
            numbersSoFar.push(i);
            expect(stream.getMedian()).toBe(naiveMedian(numbersSoFar));
        }
    });

    it('monotonic decreasing stream', () => {
        const stream = new MedianOfAnIntegerStream();
        const numbersSoFar: number[] = [];
        for (let i = 10; i >= 1; i--) {
            stream.add(i);
            numbersSoFar.push(i);
            expect(stream.getMedian()).toBe(naiveMedian(numbersSoFar));
        }
    });

    it('large sequence sanity (1..1000)', () => {
        const stream = new MedianOfAnIntegerStream();
        const numbersSoFar: number[] = [];
        for(let i = 1; i <= 1000; i++) {
            const val = (i * 73) % 1001 - 500; // shuffle sequence
            stream.add(val);
            numbersSoFar.push(val);

            if (i % 37 === 0 || i === 1000) {
                const expected = naiveMedian(numbersSoFar);
                const actual = stream.getMedian();
                expect(actual).toBeCloseTo(expected, 12);
            }
        }
    });
});