import { identifyAllIntervalOverlaps } from "../../9-intervals/2-identify-all-interval-overlaps";
import { Interval } from "../../utils/interval";

describe("Identify all internal overlaps", () => {
  it("empty on either side", () => {
    const a: Interval[] = [];
    const b: Interval[] = [{ start: 1, end: 3 }];
    expect(identifyAllIntervalOverlaps(a, b)).toEqual([]);

    const c: Interval[] = [{ start: 1, end: 3 }];
    const d: Interval[] = [];
    expect(identifyAllIntervalOverlaps(c, d)).toEqual([]);
  });

  it("single overlap", () => {
    const a: Interval[] = [{ start: 1, end: 5 }];
    const b: Interval[] = [{ start: 3, end: 7 }];
    expect(identifyAllIntervalOverlaps(a, b)).toEqual([{ start: 3, end: 5 }]);
  });

  it("disjoint (no overlap)", () => {
    const a: Interval[] = [{ start: 1, end: 2 }];
    const b: Interval[] = [{ start: 5, end: 7 }];
    expect(identifyAllIntervalOverlaps(a, b)).toEqual([]);
  });

  it("touching endpoints => zero-length overlap", () => {
    const a: Interval[] = [{ start: 1, end: 3 }];
    const b: Interval[] = [{ start: 3, end: 10 }];
    expect(identifyAllIntervalOverlaps(a, b)).toEqual([{ start: 3, end: 3 }]);
  });

  it("multiple overlaps", () => {
    const a: Interval[] = [
      { start: 1, end: 3 },
      { start: 5, end: 6 },
      { start: 7, end: 9 },
    ];
    const b: Interval[] = [
      { start: 2, end: 5 },
      { start: 5, end: 7 },
      { start: 8, end: 10 },
    ];
    expect(identifyAllIntervalOverlaps(a, b)).toEqual([
      { start: 2, end: 3 },
      { start: 5, end: 5 },
      { start: 5, end: 6 },
      { start: 7, end: 7 },
      { start: 8, end: 9 },
    ]);
  });

  it("contained interval", () => {
    const a: Interval[] = [{ start: 2, end: 10 }];
    const b: Interval[] = [{ start: 4, end: 6 }];
    expect(identifyAllIntervalOverlaps(a, b)).toEqual([{ start: 4, end: 6 }]);
  });

  it('identical lists -> identical overlaps', () => {
    const a: Interval[] = [
      { start: 1, end: 2 },
      { start: 3, end: 4 },
      { start: 10, end: 12 },
    ];
    expect(identifyAllIntervalOverlaps(a, a)).toEqual([
      { start: 1, end: 2 },
      { start: 3, end: 4 },
      { start: 10, end: 12 },
    ]);
  });
});
