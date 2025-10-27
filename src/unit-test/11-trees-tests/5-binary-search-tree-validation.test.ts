import { isValidBST } from "../../11-trees/5-binary-search-tree-validation";
import { arrayToTree } from "../../utils/test-helpers";
describe("isValidBST", () => {
  it("empty tree is valid", () => {
    expect(isValidBST(null)).toBe(true);
  });

  it("single node is valid", () => {
    const root = arrayToTree([1]);
    expect(isValidBST(root)).toBe(true);
  });

  it("valid BST (balanced)", () => {
    // [5,3,8,2,4,6,10]
    const root = arrayToTree([5, 3, 8, 2, 4, 6, 10]);
    expect(isValidBST(root)).toBe(true);
  });

  it("invalid: duplicate on right", () => {
    // [5,null,5]
    const root = arrayToTree([5, null, 5]);
    expect(isValidBST(root)).toBe(false);
  });

  it("invalid: deep violation", () => {
    // [10,5,15,null,null,6,20, null,null,null,null,12]
    // 12 is in left subtree of 10 → invalid
    const root = arrayToTree([
      10,
      5,
      15,
      null,
      null,
      6,
      20,
      null,
      null,
      null,
      null,
      12,
    ]);
    expect(isValidBST(root)).toBe(false);
  });

  it("valid: includes negatives", () => {
    // [0, -10, 1000, null, null, 2]
    const root = arrayToTree([0, -10, 1000, null, null, 2]);
    expect(isValidBST(root)).toBe(true);
  });
});
