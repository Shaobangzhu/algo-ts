import { InsertAndSearchWordsWithWildcards } from "../../12-tries/2-insert-and-search-words-with-wildcards";

describe("Insert And Search Words with Wild Cards", () => {
  let dict: InsertAndSearchWordsWithWildcards;

  beforeEach(() => {
    dict = new InsertAndSearchWordsWithWildcards();
    ["bad", "dad", "mad", "madam", "map", "mop", "a"].forEach((w) =>
      dict.insert(w)
    );
  });

  it("exact word search", () => {
    expect(dict.search("bad")).toBe(true);
    expect(dict.search("dad")).toBe(true);
    expect(dict.search("pad")).toBe(false);
    expect(dict.search("ma")).toBe(false); // prefix only
    expect(dict.search("")).toBe(false); // empty not inserted
  });

  it("single wildcard", () => {
    expect(dict.search(".ad")).toBe(true); // bad/dad/mad
    expect(dict.search("m.p")).toBe(true); // map/mop
    expect(dict.search("..p")).toBe(true); // map/mop
    expect(dict.search("b..")).toBe(true); // bad
  });

  it("multiple wildcards", () => {
    expect(dict.search("m..am")).toBe(true); // madam
    expect(dict.search("...")).toBe(true); // bad/dad/mad/map/mop (any 3 letters that exist)
    expect(dict.search("..z")).toBe(false); // no match
  });

  it("non-existing paths fail fast", () => {
    expect(dict.search("zzz")).toBe(false);
    expect(dict.search("mxp")).toBe(false);
  });
});
