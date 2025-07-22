import { generate } from "../../lc-100-easy/25-lc-pascals-triangle";

describe("118. Pascal's Triangle", () => {
  it("numRows = 1", () => {
    expect(generate(1)).toEqual([[1]]);
  });

  it("numRows = 2", () => {
    expect(generate(2)).toEqual([[1], [1, 1]]);
  });

  it("numRows = 3", () => {
    expect(generate(3)).toEqual([[1], [1, 1], [1, 2, 1]]);
  });

  it("numRows = 5", () => {
    expect(generate(5)).toEqual([
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
    ]);
  });

  it("numRows = 0 (edge case)", () => {
    expect(generate(0)).toEqual([]);
  });
});