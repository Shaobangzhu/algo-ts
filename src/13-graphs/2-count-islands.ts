type Grid = number[][];

const DIRS: ReadonlyArray<readonly [number, number]> = [
  [-1, 0], // up
  [1, 0], // down
  [0, -1], // left
  [0, 1], // right
];

export function countIslands(matrix: Grid): number {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) return 0;
  let count = 0;
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      // If a land cell is found, perform DFS to explore the full island
      // and include this island in our count
      if (matrix[r][c] === 1) {
        dfs(r, c, matrix);
        count += 1;
      }
    }
  }
  return count;
}

function dfs(r: number, c: number, matrix: Grid): void {
    // Mark the current land cell as visited.
    matrix[r][c] = -1;

    // Recursively call DFS on each neighboring land cell to continue exploring this island.
    for (const [dr, dc] of DIRS) {
        const nextR = r + dr;
        const nextC = c + dc;

        if (isWithinBounds(nextR, nextC, matrix) && matrix[nextR][nextC] === 1) {
            dfs(nextR, nextC, matrix);
        }
    }
}

function isWithinBounds(r: number, c: number, matrix: Grid): boolean {
    return r >= 0 && r < matrix.length && c >= 0 && c < matrix[0].length;
}
