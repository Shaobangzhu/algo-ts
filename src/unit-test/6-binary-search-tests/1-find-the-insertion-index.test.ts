import { findInsertionIndex } from "../../6-binary-search/1-find-the-insertion-index";

describe("findInsertionIndex", () => {
  it("returns 0 when target is less than all elements", () => {
    expect(findInsertionIndex([3, 5, 7], 1)).toBe(0);
  });

  it("returns last index when target is greater than all elements", () => {
    expect(findInsertionIndex([3, 5, 7], 10)).toBe(3);
  });

  it("returns correct index when target equals an existing element", () => {
    expect(findInsertionIndex([1, 3, 5, 7], 5)).toBe(2);
    expect(findInsertionIndex([1, 3, 5, 7], 1)).toBe(0);
  });

  it("returns correct insertion point when target falls between elements", () => {
    expect(findInsertionIndex([1, 3, 5, 7], 4)).toBe(2); // should be inserted before 5
    expect(findInsertionIndex([1, 3, 5, 7], 6)).toBe(3); // before 7
  });

  it("works with an empty array", () => {
    expect(findInsertionIndex([], 42)).toBe(0);
  });

  it("works with single-element arrays", () => {
    expect(findInsertionIndex([5], 5)).toBe(0);
    expect(findInsertionIndex([5], 2)).toBe(0);
    expect(findInsertionIndex([5], 8)).toBe(1);
  });
});
