import TreeNode from "../utils/tree-node";

/**
 * Time Complexity: O(n)
 * Space Complexity: O(w) where w = max width of the tree
 * @param root
 */
export function rightmostNodesOfBinaryTree(root: TreeNode | null): number[] {
    if (!root) return [];

    const res: number[] = [];
    const queue: TreeNode[] = [root];

    while (queue.length) {
        const levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()!;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);

            // the last node visited at this level is the rightmost one
            if (i === levelSize - 1) res.push(node.val);
        }
    }

    return res;
}