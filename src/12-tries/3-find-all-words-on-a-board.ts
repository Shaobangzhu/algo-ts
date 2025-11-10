import { TrieNode } from "../utils/trie-node";
/**
 * Time Complexity: O(N*L + m*n*3^L)
 * Space Complexity: O(N*L)
 * @param board 
 * @param words 
 */
export function findAllWordsOnBoard(board: string[][], words: string[]): string[] {
    if (board.length === 0 || board[0].length === 0 || findAllWordsOnBoard.length === 0) return [];

    // Build Trie
    const root = new TrieNode();
    for (const word of words) {
        let node = root;
        for (const ch of word) {
            if (!node.children.has(ch)) {
                node.children.set(ch, new TrieNode());
            }
            node = node.children.get(ch)!;
        }
        node.word = word; // mark the end of the word
    }

    const rows = board.length;
    const cols = board[0].length;
    const result: string[] = [];

    function dfs(r: number, c: number, node: TrieNode) {
        const ch = board[r][c];
        const child = node.children.get(ch);
        if (!child) return;

        if (child.word) {
            result.push(child.word);
            child.word = undefined; // prevent duplicates
        }

        board[r][c] = "#"; // mark visited
        const directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];

        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;
            if (
                nr >= 0 &&
                nr < rows &&
                nc >= 0 &&
                nc < cols &&
                board[nr][nc] !== "#"
            ) {
                dfs(nr, nc, child);
            }
        }

        board[r][c] = ch; // backtrack
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (root.children.has(board[r][c])) {
                dfs(r, c, root);
            }
        }
    }

    return result;
}