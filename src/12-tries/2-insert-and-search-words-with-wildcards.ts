import { TrieNode } from "../utils/trie-node";

export class InsertAndSearchWordsWithWildcards {
    private readonly root = new TrieNode();

    // Time Complexity: O(K)
    // Space Complexity: O(K)
    insert(word: string): void {
        let node = this.root;
        for (const ch of word) {
            if (!node.children.has(ch)) {
                node.children.set(ch, new TrieNode());
            }
            node = node.children.get(ch)!;
        }
        node.isWord = true;
    }

    // Time Complexity: O(K) -> worst case: O(26^k)
    // Space Complexity: O(1) ->  worst case: O(k)
    search(word: string): boolean {
        return this.searchHelper(0, word, this.root);
    }

    private searchHelper(idx: number, word: string, node: TrieNode): boolean {
        for (let i = idx; i < word.length; i++) {
            const ch = word[i];

            if (ch === ".") {
                // try all children
                for (const child of node.children.values()) {
                    if (this.searchHelper(i + 1, word, child)) return true;
                }
                return false; // no child matched
            }

            const next = node.children.get(ch);
            if (!next) return false;
            node = next;
        }

        // consumed all characters; valid only if we're at a word end
        return node.isWord;
    }
}