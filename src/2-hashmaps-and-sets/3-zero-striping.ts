/**
 * Zero Striping
 * Time Complexity: O(m * n)
 * Spcae Complexity: O(m + n)
 * @param matrix
 * @returns 
 */
function zeroStripingHashSets(matrix: number[][]): void {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return;
    }

    const m = matrix.length;
    const n = matrix[0].length;

    const zeroRows = new Set<number>();
    const zeroCols = new Set<number>();

    // Pass 1: Traverse through the matrix to identify the rows and columns containing zeros
    // and store their indexes in the appropriate hash sets.
    for (let r = 0; r < m; r++) {
        for(let c = 0; c < n; c++) {
            if(matrix[r][c] === 0) {
                zeroRows.add(r);
                zeroCols.add(c);
            }
        }
    }

    // Pass 2: Set any cell in the matrix to zero if its row index is in 'zero_rows' or
    // its column index is in 'zero_cols'
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (zeroRows.has(r) || zeroCols.has(c)) {
                matrix[r][c] = 0;
            }
        }
    }
}

/**
 * In-place Zero Tracking
 * Time Complexity: O(m * n)
 * Space Complexity: O(1)
 * @param matrix 
 */
export function zeroStriping(matrix: number[][]): void {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return;
    }

    const m = matrix.length;
    const n = matrix[0].length;

    let firstRowHasZero = false;
    for (let c = 0; c < n; c++) {
        if (matrix[0][c] === 0) {
            firstRowHasZero = true;
            break;
        }
    }

    let firstColHasZero = false;
    for (let r = 0; r < m; r++) {
        if (matrix[r][0] === 0) {
            firstColHasZero = true;
            break;
        }
    }

    // Use first row and column to mark zeros
    for (let r = 1; r < m; r++) {
        for (let c = 1; c < n; c++) {
            if (matrix[r][c] === 0) {
                matrix[0][c] = 0;
                matrix[r][0] = 0;
            }
        }
    }

    // Zero out cells based on first row/column markers
    for (let r = 1; r < m; r++) {
        for (let c = 1; c < n; c++) {
            if (matrix[0][c] === 0 || matrix[r][0] === 0) {
                matrix[r][c] = 0;
            }
        }
    }

    if (firstRowHasZero) {
        for (let c = 0; c < n; c++) {
            matrix[0][c] = 0;
        }
    }

    if (firstColHasZero) {
        for (let r = 0; r < m; r++) {
            matrix[r][0] = 0;
        }
    }
}