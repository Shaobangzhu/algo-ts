import { diameterOfBinaryTree } from "../../lc-29-easy/17-lc-diameter-of-binary-tree";
import TreeNode from "../../utils/tree-node";

function buildTree(): TreeNode {
    // 构建如下的树:
    //       1
    //      / \
    //     2   3
    //    / \
    //   4   5
    const node4 = new TreeNode(4);
    const node5 = new TreeNode(5);
    const node2 = new TreeNode(2, node4, node5);
    const node3 = new TreeNode(3);
    const root = new TreeNode(1, node2, node3);
    return root;
}

describe("543. Diameter of Binary Tree", ()=>{
    it('should return correct diameter for example tree', ()=>{
        const root = buildTree();
        expect(diameterOfBinaryTree(root)).toBe(3);
    });

    it("should return 0 for single node tree", ()=>{
        const root = new TreeNode(1);
        expect(diameterOfBinaryTree(root)).toBe(0);
    });

    it("should return 1 for tree with only two nodes", ()=>{
        const root = new TreeNode(1, new TreeNode(2));
        expect(diameterOfBinaryTree(root)).toBe(1);
    });
});