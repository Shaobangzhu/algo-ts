import TreeNode from "../utils/tree-node";

/**
 * NOTE: The Tree contains unique values
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param preorder 
 * @param inorder 
 */
export function buildBinaryTree(preorder: number[], inorder: number[]): TreeNode | null {
    if (preorder.length !== inorder.length) {
        throw new Error("preorder and inorder must have the same length");
    }
    if (preorder.length === 0) return null;

    // Map each inorder value to its index for O(1) lookups
    const inorderIndexMap = new Map<number, number>();
    for (let i = 0; i < inorder.length; i++) {
        inorderIndexMap.set(inorder[i], i);
    }

    let preorderIndex = 0;

    // Recursively build subtree spanning inorder[left..right]
    function buildSubtree(left: number, right: number): TreeNode | null {
        // Base case: no elements in this range
        if (left > right) return null;

        // pick current root from preorder
        const val = preorder[preorderIndex];
        const idx = inorderIndexMap.get(val);
        if (idx === undefined) {
            throw new Error(`Value ${val} not found in inorder traversal`);
        }

        const node = new TreeNode(val);

        // Move to next root in preorder
        preorderIndex += 1;

        // Build left and right subtrees
        node.left = buildSubtree(left, idx - 1);
        node.right = buildSubtree(idx + 1, right);

        return node;
    }

    return buildSubtree(0, inorder.length - 1);
}
