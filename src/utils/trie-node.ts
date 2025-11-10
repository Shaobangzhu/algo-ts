export class TrieNode {
    children: Map<string, TrieNode>;
    isWord?: boolean;
    word?: string; // store the complete word for convenience

    constructor() {
        this.children = new Map<string, TrieNode>();
        this.isWord = false;
    }
}