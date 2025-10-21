import TreeNode from "../../utils/tree-node";
import {
  invertBinaryTreeRecursive,
  invertBinaryTreeIterative,
  invertBinaryTreeBFS,
} from "../../11-trees/1-invert-binary-tree-recursive";
import { arrayToTree, treeToArray } from "../../utils/test-helpers";

type InvertFunction = (root: TreeNode | null) => TreeNode | null;

const implementations: [string, InvertFunction][] = [
  ["dfs recursive", invertBinaryTreeRecursive],
  ["dfs iterative", invertBinaryTreeIterative],
  ["bfs", invertBinaryTreeBFS],
];

describe.each(implementations)(
  "Invert Binary Tree (%s version)",
  (_label, invertFn) => {
    it("inverts a full binary tree", () => {
      // [4, 2, 7, 1, 3, 6, 9] -> [4, 7, 2, 9, 6, 3, 1]
      const root = arrayToTree([4, 2, 7, 1, 3, 6, 9]);
      const res = invertFn(root);
      expect(treeToArray(res)).toEqual([4, 7, 2, 9, 6, 3, 1]);
    });

    it("handles empty tree", () => {
      expect(invertFn(null)).toBeNull();
    });

    it("handles a single node", () => {
      const root = new TreeNode(1);
      expect(treeToArray(invertFn(root))).toEqual([1]);
    });

    it("left-skewed tree becomes right-skewed", () => {
      const root = arrayToTree([1, 2, null, 3, null, 4, null]);
      const res = invertFn(root);
      expect(treeToArray(res)).toEqual([1, null, 2, null, 3, null, 4]);
    });

    it("double inversion restores the original", () => {
      const original = arrayToTree([5, 3, 8, 1, 4, 7, 9]);
      const once = invertFn(arrayToTree([5, 3, 8, 1, 4, 7, 9]));
      const twice = invertFn(once);
      expect(treeToArray(twice)).toEqual(treeToArray(original));
    });
  }
);
