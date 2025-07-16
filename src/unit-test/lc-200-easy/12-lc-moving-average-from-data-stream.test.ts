import { MovingAverage1, MovingAverage2 } from "../../lc-200-easy/12-lc-moving-average-from-data-stream";

describe("346. Moving Average from Data Stream", ()=>{
    it("returns correct average with window size 3", ()=>{
        const ma = new MovingAverage2(3);
        expect(ma.next(1)).toBeCloseTo(1.0);
        expect(ma.next(10)).toBeCloseTo(5.5);
        expect(ma.next(3)).toBeCloseTo(4.6667, 4);
        expect(ma.next(5)).toBeCloseTo(6.0);
    });

    it("works correctly when only one value is input", ()=>{
        const ma = new MovingAverage2(3);
        expect(ma.next(42)).toBeCloseTo(42.0);
    });

    it("returns correct average when window size is 1", ()=>{
        const ma = new MovingAverage2(1);
        expect(ma.next(1)).toBeCloseTo(1.0);
        expect(ma.next(100)).toBeCloseTo(100.0);
    });

    it("handles zeros and negative numbers", ()=>{
        const ma = new MovingAverage2(3);
        expect(ma.next(0)).toBeCloseTo(0.0);
        expect(ma.next(-10)).toBeCloseTo(-5.0);
        expect(ma.next(-5)).toBeCloseTo(-5.0);
        expect(ma.next(10)).toBeCloseTo(-1.6667, 4);
    });

    it("handles decimal numbers", ()=>{
        const ma = new MovingAverage2(2);
        expect(ma.next(1.5)).toBeCloseTo(1.5);
        expect(ma.next(2.5)).toBeCloseTo(2.0);
        expect(ma.next(3.5)).toBeCloseTo(3.0);
    });

    it("handles long sequences and remains stable", ()=>{
        const ma = new MovingAverage2(5);
        const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const expected = [1, 1.5, 2, 2.5, 3, 4, 5, 6, 7, 8];
        for (let i = 0; i < input.length; i++) {
            expect(ma.next(input[i])).toBeCloseTo(expected[i]);
        } 
    })

    it("performace benchmark: compare performance between brutal force and optimized versions", ()=>{
        const WINDOW_SIZE = 1000;
        const TOTAL_CALLS = 500_000;
        const inputs = Array.from({ length: TOTAL_CALLS }, () => Math.random() * 100);

        const naive = new MovingAverage1(WINDOW_SIZE);
        const optimized = new MovingAverage2(WINDOW_SIZE);

        const start1 = performance.now();
        for (let val of inputs) {
            naive.next(val);
        }
        const duration1 = performance.now() - start1;
        

        const start2 = performance.now();
        for (let val of inputs) {
            optimized.next(val);
        }
        const duration2 = performance.now() - start2;

        console.log(`MovingAverage1 version took ${duration1.toFixed(2)} ms`);
        console.log(`MovingAverage2 version took ${duration2.toFixed(2)} ms`);
        const result = duration1 > duration2 ? 'MovingAverage2' : 'MovingAverage1';
        console.log(`${result} is much faster!`);
    });
})