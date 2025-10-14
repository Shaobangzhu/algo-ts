import { largestOverlapOfIntervals } from "../../9-intervals/3-largest-overlap-of-intervals";
import { Interval } from "../../utils/interval";

describe("Largest Overlap of Intervals", () => {
  it("empty list -> 0", () => {
    expect(largestOverlapOfIntervals([])).toBe(0);
  });

  it("single interval -> 1", () => {
    const data: Interval[] = [{ start: 1, end: 5 }];
    expect(largestOverlapOfIntervals(data)).toBe(1);
  });

  it("two disjoint intervals -> 1", () => {
    const data: Interval[] = [
      { start: 1, end: 3 },
      { start: 4, end: 6 },
    ];
    expect(largestOverlapOfIntervals(data)).toBe(1);
  });

  it("touching endpoints do NOT overlap (end processed before start)", () => {
    const data: Interval[] = [
      { start: 1, end: 3 },
      { start: 3, end: 5 },
    ];
    expect(largestOverlapOfIntervals(data)).toBe(1);
  });

  it("simple overlap", () => {
    const data: Interval[] = [
      { start: 1, end: 4 },
      { start: 2, end: 5 },
    ];
    expect(largestOverlapOfIntervals(data)).toBe(2);
  });

  it("nested intervals", () => {
    const data: Interval[] = [
      { start: 1, end: 10 },
      { start: 2, end: 9 },
      { start: 3, end: 8 },
      { start: 4, end: 7 },
    ];
    expect(largestOverlapOfIntervals(data)).toBe(4);
  });
});