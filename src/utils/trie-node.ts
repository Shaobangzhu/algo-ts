export class TrieNode {
    children: Map<string, TrieNode>;
    isWord: boolean;

    constructor() {
        this.children = new Map<string, TrieNode>();
        this.isWord = false;
    }
}