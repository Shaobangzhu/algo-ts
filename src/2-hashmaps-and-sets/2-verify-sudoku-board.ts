/**
 * Verify Sudoku Board
 * Time Complexity: O(n^2)
 * Space Complexity: O(n^2)
 * @param board 
 */
export function verifySudokuBoard(board: number[][]): boolean {
    const rowSets: Set<number>[] = Array.from({ length: 9 }, () => new Set());
    const columnSets: Set<number>[] = Array.from({ length: 9 }, () => new Set());
    const subgridSets: Set<number>[][] = Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => new Set()));

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const num = board[r][c];
            if (num === 0) continue; // skip empty cells

            if(rowSets[r].has(num)) return false;
            if(columnSets[c].has(num)) return false;
            if(subgridSets[Math.floor(r / 3)][Math.floor(c / 3)].has(num)) return false;

            rowSets[r].add(num);
            columnSets[c].add(num);
            subgridSets[Math.floor(r / 3)][Math.floor(c / 3)].add(num);
        }
    }
    return true;
}