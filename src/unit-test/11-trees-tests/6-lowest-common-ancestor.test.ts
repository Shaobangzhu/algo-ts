import { lowestCommonAncestor } from "../../11-trees/6-lowest-common-ancestor";
import { arrayToTree } from "../../utils/test-helpers";
import { findTreeNode } from "../../utils/test-helpers";
import TreeNode from "../../utils/tree-node";

describe("Lowest Common Ancestor (binary tree)", () => {
  // Tree from LeetCode 236 example:
  //         3
  //       /   \
  //      5     1
  //     / \   / \
  //    6  2  0   8
  //      / \
  //     7   4
  const root = arrayToTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])!;

  it('LCA of 5 and 1 is 3', () => {
    const p = findTreeNode(root, 5)!;
    const q = findTreeNode(root, 1)!;
    const ans = lowestCommonAncestor(root, p, q);
    expect(ans?.val).toBe(3);
  });

  it("LCA where one node is ancestor of the other (5, 4) -> 5", () => {
    const p = findTreeNode(root, 5)!;
    const q = findTreeNode(root, 4)!;
    const ans = lowestCommonAncestor(root, p, q);
    expect(ans?.val).toBe(5);
  });

  it("LCA of (7, 4) is 2", () => {
    const p = findTreeNode(root, 7)!;
    const q = findTreeNode(root, 4)!;
    const ans = lowestCommonAncestor(root, p, q);
    expect(ans?.val).toBe(2);
  });

  it("Single-node tree and p === q returns that node", () => {
    const solo = new TreeNode(42);
    const ans = lowestCommonAncestor(solo, solo, solo);
    expect(ans?.val).toBe(42);
  });
});
