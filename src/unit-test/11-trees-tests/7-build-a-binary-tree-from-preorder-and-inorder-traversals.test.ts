import { buildBinaryTree } from "../../11-trees/7-build-a-binary-tree-from-preorder-and-inorder-traversals";
import { treeToArray } from "../../utils/test-helpers";

describe('Build a Binary Tree from Preorder and Inorder Traversal', () => {
    it('builds a typical tree', () => {
        const preorder = [3, 9, 20, 15, 7];
        const inorder = [9, 3, 15, 20, 7];

        const root = buildBinaryTree(preorder, inorder);

        const expectedLevelOrder = [3, 9, 20, null, null, 15, 7];
        expect(treeToArray(root)).toEqual(expectedLevelOrder);
    });
});