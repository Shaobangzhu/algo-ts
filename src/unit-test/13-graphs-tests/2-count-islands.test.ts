import { countIslands } from "../../13-graphs/2-count-islands";

function cloneGrid(grid: number[][]): number[][] {
  return grid.map((row) => [...row]);
}

describe("countIslands", () => {
  test("returns 0 for empty matrix", () => {
    expect(countIslands([])).toBe(0);
  });

  test("returns 0 for matrix with empty row", () => {
    expect(countIslands([[]])).toBe(0);
  });

  test("counts islands correctly on the book example (2 islands)", () => {
    const grid = [
      [1, 1, 0, 0],
      [1, 1, 0, 0],
      [0, 0, 1, 1],
      [0, 0, 0, 1],
    ];
    expect(countIslands(cloneGrid(grid))).toBe(2);
  });

  test("counts 1 island when all land is connected", () => {
    const grid = [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ];
    expect(countIslands(cloneGrid(grid))).toBe(1);
  });

  test("counts islands in a checkerboard pattern (no diagonals)", () => {
    const grid = [
      [1, 0, 1],
      [0, 1, 0],
      [1, 0, 1],
    ];
    // Only 4-directional adjacency; center is isolated, corners are isolated => 5 islands
    expect(countIslands(cloneGrid(grid))).toBe(5);
  });

  test("counts 0 when all water", () => {
    const grid = [
      [0, 0, 0],
      [0, 0, 0],
    ];
    expect(countIslands(cloneGrid(grid))).toBe(0);
  });

  test("handles single cell land", () => {
    expect(countIslands([[1]])).toBe(1);
  });

  test("handles single cell water", () => {
    expect(countIslands([[0]])).toBe(0);
  });

  test("does not connect diagonals", () => {
    const grid = [
      [1, 0],
      [0, 1],
    ];
    expect(countIslands(cloneGrid(grid))).toBe(2);
  });

  test("mutates the matrix by marking visited land as -1", () => {
    const grid = [
      [1, 1, 0],
      [0, 1, 0],
    ];
    const working = cloneGrid(grid);

    const result = countIslands(working);
    expect(result).toBe(1);

    // All cells that were 1 should now be -1
    expect(working).toEqual([
      [-1, -1, 0],
      [0, -1, 0],
    ]);
  });

  test("works when matrix contains some -1 already (treated as visited/non-land)", () => {
    const grid = [
      [-1, 1, 0],
      [0, 1, 1],
      [0, 0, -1],
    ];
    // The 1s at (0,1),(1,1),(1,2) are connected => 1 island
    expect(countIslands(cloneGrid(grid))).toBe(1);
  });
});