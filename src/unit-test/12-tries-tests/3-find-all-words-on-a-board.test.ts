import { findAllWordsOnBoard } from "../../12-tries/3-find-all-words-on-a-board";

describe("findAllWordsOnBoard using TrieNode", () => {
  it("classic example", () => {
    const board = [
      ["o", "a", "a", "n"],
      ["e", "t", "a", "e"],
      ["i", "h", "k", "r"],
      ["i", "f", "l", "v"],
    ];
    const words = ["oath", "pea", "eat", "rain"];
    const result = findAllWordsOnBoard(
      board.map((r) => [...r]),
      words
    );
    expect(new Set(result)).toEqual(new Set(["oath", "eat"]));
  });

  it("no matching words", () => {
    const board = [
      ["a", "b"],
      ["c", "d"],
    ];
    const words = ["xyz", "zzz"];
    expect(findAllWordsOnBoard(board, words)).toEqual([]);
  });

  it("duplicate paths should not duplicate words", () => {
    const board = [
      ["a", "b", "a"],
      ["b", "a", "b"],
      ["a", "b", "a"],
    ];
    const words = ["aba"];
    const result = findAllWordsOnBoard(
      board.map((r) => [...r]),
      words
    );
    expect(result).toEqual(["aba"]);
  });

  it("single cell board", () => {
    const board = [["z"]];
    const words = ["z", "zz"];
    const result = findAllWordsOnBoard(
      board.map((r) => [...r]),
      words
    );
    expect(result).toEqual(["z"]);
  });
});
