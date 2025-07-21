import { rangeSumBST } from "../../lc-100-easy/21-lc-range-sum-of-BST";
import TreeNode from "../../utils/tree-node";

describe("938. Range Sum of BST", () => {
  it("rangeSumBST example", () => {
    const root = new TreeNode(
      10,
      new TreeNode(5, new TreeNode(3), new TreeNode(7)),
      new TreeNode(15, null, new TreeNode(18))
    );
    expect(rangeSumBST(root, 7, 15)).toBe(32);
  });
  it("empty tree", () => {
    expect(rangeSumBST(null, 1, 10)).toBe(0);
  });
});
