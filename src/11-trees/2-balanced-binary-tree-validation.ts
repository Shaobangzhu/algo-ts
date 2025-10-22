import TreeNode from "../utils/tree-node";

/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param root 
 */
export function balancedBinaryTreeValidation(root: TreeNode | null): boolean {
    return getHeightImbalance(root) !== -1;
}


function getHeightImbalance(node: TreeNode | null): number {
    // Base case: null nodes have height 0
    if (!node) return 0;

    // Recursively get heights
    const leftHeight = getHeightImbalance(node.left);
    if (leftHeight === -1) return -1; // left subtree already imbalanced

    const rightHeight = getHeightImbalance(node.right);
    if (rightHeight === -1) return -1; // right subtree already imbalanced

    // If current node's subtrees differ by more than 1 -> imbalanced
    if (Math.abs(leftHeight - rightHeight) > 1) return -1;

    // Return height of this subtree
    return 1 + Math.max(leftHeight, rightHeight);
}