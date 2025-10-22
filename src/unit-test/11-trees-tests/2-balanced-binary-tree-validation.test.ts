import { balancedBinaryTreeValidation } from "../../11-trees/2-balanced-binary-tree-validation";
import TreeNode from "../../utils/tree-node";
import { arrayToTree } from "../../utils/test-helpers";

describe("validate balanced binary tree", () => {
  it("empty tree is balanced", () => {
    expect(balancedBinaryTreeValidation(null)).toBe(true);
  });

  it("single node", () => {
    const root = new TreeNode(1);
    expect(balancedBinaryTreeValidation(root)).toBe(true);
  });

  it("perfectly balanced", () => {
    const root = arrayToTree([1, 2, 3, 4, 5, 6, 7]);
    expect(balancedBinaryTreeValidation(root)).toBe(true);
  });

  it("unbalanced skewed", () => {
    const root = arrayToTree([1, 2, null, 3, null, 4]);
    expect(balancedBinaryTreeValidation(root)).toBe(false);
  });

  it("locally unbalanced subtree", () => {
    //      1
    //     / \
    //    2   3
    //   /
    //  4
    // /
    //5
    const root = arrayToTree([1, 2, 3, 4, null, null, null, 5]);
    expect(balancedBinaryTreeValidation(root)).toBe(false);
  });

  it("balanced but not perfect", () => {
    //      1
    //     / \
    //    2   3
    //   / \
    //  4   5
    const root = arrayToTree([1, 2, 3, 4, 5]);
    expect(balancedBinaryTreeValidation(root)).toBe(true);
  });
});
