/**
 * 118. Pascal's Triangle
 * Time Complexity: numRows^2
 * Space Complexity: numRows^2
 * @param numRows
 */
export function generate(numRows: number): number[][] {
  const result: number[][] = [];

  for(let i = 0; i < numRows; i++) {
    const row: number[] = new Array(i + 1).fill(1);

    for(let j = 1; j < i; j++) {
        row[j] = result[i-1][j-1] + result[i-1][j];
    }

    result.push(row);
  }
  return result;
}
