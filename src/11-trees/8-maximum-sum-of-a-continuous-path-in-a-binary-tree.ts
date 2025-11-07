import TreeNode from "../utils/tree-node";

/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param root 
 */
export function maxPathSum(root: TreeNode | null): number {
    if (!root) return 0;

    let maxSum = -Infinity;

    function dfs(node: TreeNode | null): number {
        if (!node) return 0;

        // DROP Negatives: best gain we can carry from left/right
        const leftGain = Math.max(dfs(node.left), 0);
        const rightGain = Math.max(dfs(node.right), 0);

        // path that uses this node as the turning point
        const priceThroughNode = node.val + leftGain + rightGain;
        maxSum = Math.max(maxSum, priceThroughNode);

        // return best single-branch gain to parent
        return node.val + Math.max(leftGain, rightGain);
    }

    dfs(root);
    return maxSum;
}