import { matrixInfection } from "../../13-graphs/3-matrix-infection";

function cloneGrid(grid: number[][]): number[][] {
  return grid.map((row) => [...row]);
}

describe("matrixInfection", () => {
  it("returns 0 for empty matrix", () => {
    expect(matrixInfection([])).toBe(0);
  });

  it("returns 0 for matrix with empty row", () => {
    expect(matrixInfection([[]])).toBe(0);
  });

  it("returns 0 if there are no uninfected cells (no 1s)", () => {
    const grid = [
      [2, 0, 2],
      [0, 0, 0],
    ];
    expect(matrixInfection(cloneGrid(grid))).toBe(0);
  });

  it("returns -1 if there are uninfected cells but no infected sources", () => {
    const grid = [
      [1, 1],
      [1, 1],
    ];
    expect(matrixInfection(cloneGrid(grid))).toBe(-1);
  });

  it("infects in 1 second when adjacent to a source", () => {
    const grid = [
      [2, 1],
      [0, 0],
    ];
    expect(matrixInfection(cloneGrid(grid))).toBe(1);
  });

  it("infects in multiple seconds using level-order BFS", () => {
    // Spread timeline:
    // t0: [2,1,1]
    // t1: [2,2,1]
    // t2: [2,2,2]
    const grid = [[2, 1, 1]];
    expect(matrixInfection(cloneGrid(grid))).toBe(2);
  });

  it("returns -1 if some uninfected cells are blocked off by zeros", () => {
    // The 1 at (0, 0) can never be reached
    const grid = [
      [1, 0, 2],
      [0, 0, 0],
      [2, 0, 1], // the 1 at (2, 2) also blocked
    ];
    expect(matrixInfection(cloneGrid(grid))).toBe(-1);
  });

  it("handles multiple infection sources correctly (faster spread)", () => {
    const grid = [
      [2, 1, 1],
      [1, 1, 1],
      [1, 1, 2],
    ];
    // With two sources, everything gets infected in 1 seconds:
    // t1 infect neighbors, t2 finishes the farthest ones
    expect(matrixInfection(cloneGrid(grid))).toBe(2);
  });

  it("mutates matrix by converting infected 1s into 2s", () => {
    const grid = [
        [2, 1, 0],
        [1, 1, 1],
    ];
    const working = cloneGrid(grid);

    const res = matrixInfection(working);
    expect(res).toBe(3);

    // After infection, all reachable 1s should become 2s
    expect(working).toEqual([
        [2, 2, 0],
        [2, 2, 2],
    ]);
  });

  it("does not treat diagonal cells as adjacent (4-direction only)", () => {
    const grid = [
        [2, 0],
        [0, 1],
    ];

    // The 1 is diagonal from 2, cannot be infected
    expect(matrixInfection(cloneGrid(grid))).toBe(-1);
  });
});
