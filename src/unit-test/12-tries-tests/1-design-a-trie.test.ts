import { Trie } from "../../12-tries/1-design-a-trie";

describe("Trie", () => {
  let trie: Trie;

  beforeEach(() => {
    trie = new Trie();
  });

  it("should insert and search for a word", () => {
    trie.insert("apple");
    expect(trie.search("apple")).toBe(true);
  });

  it("should return false for a word not inserted", () => {
    trie.insert("apple");
    expect(trie.search("app")).toBe(false);
  });

  it("should return true for a prefix that exists", () => {
    trie.insert("apple");
    expect(trie.hasPrefix("app")).toBe(true);
  });

  it("should return false for a prefix that doesn't exist", () => {
    trie.insert("apple");
    expect(trie.hasPrefix("bat")).toBe(false);
  });

  it("should support multiple words with same prefix", () => {
    trie.insert("app");
    trie.insert("apple");
    trie.insert("application");

    expect(trie.search("app")).toBe(true);
    expect(trie.search("apple")).toBe(true);
    expect(trie.search("application")).toBe(true);
    expect(trie.hasPrefix("appl")).toBe(true);
    expect(trie.hasPrefix("apx")).toBe(false);
  });

  it("should handle empty string gracefully", () => {
    trie.insert("");
    expect(trie.search("")).toBe(true);
    expect(trie.hasPrefix("")).toBe(true);
  });

  it("should be case-sensitive", () => {
    trie.insert("Apple");
    expect(trie.search("apple")).toBe(false);
    expect(trie.search("Apple")).toBe(true);
  });
});
