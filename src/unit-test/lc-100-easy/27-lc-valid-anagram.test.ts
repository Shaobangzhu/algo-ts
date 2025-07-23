import { isAnagram } from "../../lc-100-easy/27-lc-valid-anagram";

describe("242. Valid Anagram", ()=>{
    it("basic positive case: anagram vs nagaram", () => {
    expect(isAnagram("anagram", "nagaram")).toBe(true);
  });

  it("basic negative case: rat vs car", () => {
    expect(isAnagram("rat", "car")).toBe(false);
  });

  it("empty strings", () => {
    expect(isAnagram("", "")).toBe(true);
  });

  it("same letters but different counts", () => {
    expect(isAnagram("aabb", "ab")).toBe(false);
  });

  it("unicode characters", () => {
    expect(isAnagram("爱你", "你爱")).toBe(true);
    expect(isAnagram("爱你", "你他")).toBe(false);
  });

  it("case sensitivity matters", () => {
    expect(isAnagram("a", "A")).toBe(false);
  });

  it("single character", () => {
    expect(isAnagram("x", "x")).toBe(true);
    expect(isAnagram("x", "y")).toBe(false);
  });

  it("long strings", () => {
    const s = "a".repeat(10000) + "b".repeat(10000);
    const t = "b".repeat(10000) + "a".repeat(10000);
    expect(isAnagram(s, t)).toBe(true);
  });
});