/**
 * 2965. Find Missing and Repeated Values
 * Time Complexity: O(n^2)
 * Space Complexity: O(n^2)
 * @param grid 
 */
export function findMissingAndRepeatedValues(grid: number[][]): number[] {
    const n = grid.length;
    const size = n * n;

    const count: number[] = Array(size + 1).fill(0); // count[0] unused

    // Flatten and count
    for (const row of grid) {
        for (const num of row) {
            count[num]++;
        }
    }

    let repeated = -1;
    let missing = -1;

    for (let i = 1; i <= size; i++) {
        if (count[i] === 2) repeated = i;
        if (count[i] === 0) missing = i;
    }

    return [repeated, missing];
}