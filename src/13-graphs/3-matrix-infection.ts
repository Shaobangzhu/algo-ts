type Grid = number[][];

const DIRS = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
] as const;

export function matrixInfection(matrix: Grid): number {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) return 0;

    const rowLen = matrix.length;
    const colLen = matrix[0].length;

    // queue of infected cellls
    const queue: Array<[number, number]> = [];

    // 实现队列(queue)时用的一个"队头指针",用来表示当前要出队(dequeue)的元素在数组里的下标
    // JS/TS里, 如果用queue.shift()来出队, 会导致数组整体左移,时间复杂度O(n), 在BFS里会变慢
    let head = 0;

    // count of uninfected cells (value 1)
    let ones = 0;

    // count of infected cells (value 2)
    let seconds = 0;

    // initialize queue with all infected cells, count ones
    for (let r = 0; r < rowLen; r++) {
        for (let c = 0; c < colLen; c++) {
            if (matrix[r][c] === 1) {
                ones += 1;
            } else if (matrix[r][c] === 2) {
                queue.push([r, c]);
            } 
        }
    }

    // BFS level-order: each level = 1 second
    while (head < queue.length && ones > 0) {
        seconds += 1;

        const levelSize = queue.length - head;
        for (let i = 0; i < levelSize; i++) {
            const [r, c] = queue[head++];
            for (const [dr, dc] of DIRS) {
                const newr = r + dr;
                const newc = c + dc;

                if (isWithinBounds(newr, newc, rowLen, colLen) && matrix[newr][newc] === 1) {
                    matrix[newr][newc] = 2;
                    ones -= 1;
                    queue.push([newr, newc]);
                }
            }
        }
    }

    return ones === 0 ? seconds : -1;
}

function isWithinBounds(r: number, c: number, rows: number, cols: number): boolean {
    return r >= 0 && r < rows && c >= 0 && c < cols;
}
