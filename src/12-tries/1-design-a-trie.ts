import { TrieNode } from "../utils/trie-node";

export class Trie {
    private root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    // Time Complexity: O(K)
    // Space Complexity: O(K)
    insert(word: string): void {
        let node = this.root;
        for (const c of word) {
            if (!node.children.has(c)) {
                node.children.set(c, new TrieNode());
            }
            node = node.children.get(c)!;
        }
        node.isWord = true;
    }

    // Time Complexity: O(K)
    // Space Complexity: O(1)
    search(word: string): boolean {
        let node = this.root;
        for (const c of word) {
            const next = node.children.get(c);
            if (!next) return false;
            node = next;
        }
        return node.isWord;
    }

    // Time Complexity: O(K)
    // Space Complexity: O(1)
    hasPrefix(prefix: string): boolean {
        let node = this.root;
        for (const c of prefix) {
            const next = node.children.get(c);
            if (!next) return false;
            node = next;
        }
        return true;
    }

    // (Optional) Common alias name used in many problems
    startWith(prefix: string): boolean {
        return this.hasPrefix(prefix);
    }
}