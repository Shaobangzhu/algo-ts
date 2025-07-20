import TreeNode from "../utils/tree-node";

/**
 * 938. Range Sum of BST
 * Time Complexity: For a balanced BST, the recursion stack will be O(logn), for a completely unbalanced tree, the depth could go to O(n)
 * Space Complexity: O(h), where h is the height of the tree
 * @param root 
 * @param low 
 * @param high 
 */
export function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
    if (!root) return 0;

    if(root.val < low) {
        return rangeSumBST(root.right, low, high);
    }

    if(root.val > high) {
        return rangeSumBST(root.left, low, high);
    }

    return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
}