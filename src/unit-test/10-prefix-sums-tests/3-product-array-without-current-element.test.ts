import { productArrayWithoutCurrentElement } from "../../10-prefix-sums/3-product-array-without-current-element";

describe("Product Array Without Current Element", () => {
  it("handles empty array", () => {
    expect(productArrayWithoutCurrentElement([])).toEqual([]);
  });

  it("single element -> [1]", () => {
    expect(productArrayWithoutCurrentElement([5])).toEqual([1]);
  });

  it("basic increasing sequence", () => {
    expect(productArrayWithoutCurrentElement([1, 2, 3, 4])).toEqual([
      24, 12, 8, 6,
    ]);
  });

  it("idempotent length and types | 验证函数输出的长度和输入一样，并且所有元素类型都是number", () => {
    const input = [3, 3, 3];
    const out = productArrayWithoutCurrentElement(input);
    expect(out).toHaveLength(input.length);
    out.forEach((v) => expect(typeof v).toBe("number"));
  });

  it("matches naive O(n^2) implementation on a set of cases", () => {
    const cases: number[][] = [
      [1, 2],
      [2, 3, 5],
      [10, -10, 10, -10],
      [5, 0, 2, 0, 7],
      [1, -1, 1, -1, 1],
    ];

    const naive = (arr: number[]) =>
        arr.map((_, i) => 
            arr.reduce((prod, val, j) => (i === j ? prod : prod * val), 1)
        );
    
        for (const c of cases) {
            expect(productArrayWithoutCurrentElement(c)).toEqual(naive(c));
        }
  });
});
