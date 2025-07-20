import TreeNode from "../utils/tree-node";
/**
 * 543. Diameter of Binary Tree
 * Time Complexity: O(n) 每个节点只访问一次
 * Space Complexity: O(h) 递归栈深度，h是树的高度，worst case为O(n);
 * @param root
 */
export function diameterOfBinaryTree(root: TreeNode | null): number {
    let maxDiameter = 0;

    function dfs(node: TreeNode | null): number {
        if (node === null) return 0;

        const leftDepth = dfs(node.left);
        const rightDepth = dfs(node.right);

        // Update maxDiameter
        maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);

        // Return current maxDepth
        return Math.max(leftDepth, rightDepth) + 1;
    }

    dfs(root);
    return maxDiameter;
}