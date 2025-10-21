import TreeNode from "../utils/tree-node";

/**
 * Time Complexity: O(n)
 * Space Complexity: O(h)
 * @param root 
 */
export function invertBinaryTreeRecursive(root: TreeNode | null): TreeNode | null {
    if (!root) return null;
    [root.left, root.right] = [root.right, root.left];
    invertBinaryTreeRecursive(root.left);
    invertBinaryTreeRecursive(root.right);
    return root;
}

/**
 * Iterative (stack/DFS)
 * Time Complexity: O(n)
 * Space Complexity: O(h)
 * @param root 
 */
export function invertBinaryTreeIterative(root: TreeNode | null): TreeNode | null {
    if (!root) return null;
    const stack: TreeNode[] = [root];
    while (stack.length) {
        const node = stack.pop()!;
        [node.left, node.right] = [node.right, node.left];
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }
    return root;
}

/**
 * Invert Binary Tree using BFS (queue).
 * Time complexity: O(n)
 * Space complexity: O(n) (queue may store up to one level of nodes)
 * @param root 
 */
export function invertBinaryTreeBFS(root: TreeNode | null): TreeNode | null {
    if (!root) return null;

    const queue: TreeNode[] = [root]; // Queue for level-order traversal
    
    while (queue.length > 0) {
        const node = queue.shift()!; // Dequeue front node

        // Swap left and right children
        [node.left, node.right] = [node.right, node.left];

        // Enqueue non-null children
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }

    return root;
}