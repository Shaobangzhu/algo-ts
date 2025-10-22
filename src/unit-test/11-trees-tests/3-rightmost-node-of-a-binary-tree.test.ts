import { rightmostNodesOfBinaryTree } from "../../11-trees/3-rightmost-node-of-a-binary-tree";
import { arrayToTree } from "../../utils/test-helpers";

describe("right most nodes of binary tree", () => {
  it("empty tree", () => {
    expect(rightmostNodesOfBinaryTree(null)).toEqual([]);
  });

  it("single node", () => {
    const root = arrayToTree([7]);
    expect(rightmostNodesOfBinaryTree(root)).toEqual([7]);
  });

  it("balanced example with nulls", () => {
    //      1
    //     / \
    //    2   3
    //     \   \
    //      5   4
    const root = arrayToTree([1, 2, 3, null, 5, null, 4]);
    expect(rightmostNodesOfBinaryTree(root)).toEqual([1, 3, 4]);
  });

  it("left-skewed tree", () => {
    // 1 -> 2 -> 3 (all left)
    const root = arrayToTree([1, 2, null, 3]);
    expect(rightmostNodesOfBinaryTree(root)).toEqual([1, 2, 3]);
  });

  it("right-skewed tree", () => {
    // 1 -> 2 -> 3 (all right)
    const root = arrayToTree([1, null, 2, null, 3]);
    expect(rightmostNodesOfBinaryTree(root)).toEqual([1, 2, 3]);
  });

  it("wider tree", () => {
    //          10
    //        /    \
    //       5      15
    //     /  \       \
    //    3    7       18
    const root = arrayToTree([10, 5, 15, 3, 7, null, 18]);
    expect(rightmostNodesOfBinaryTree(root)).toEqual([10, 15, 18]);
  });
});
