import TreeNode from "../utils/tree-node";
/**
 * Time Complexity: O(n)
 * Space Complexity: O(w) worst case: O(n/2)
 * @param root 
 */
export function widestBinaryTreeLevel(root: TreeNode | null): number {
    if (!root) return 0;

    let maxWidth = 0;
    // 队列元素: [node, index]
    const queue: Array<[TreeNode, number]> = [[root, 0]];

    while (queue.length > 0) {
        const levelSize = queue.length;
        // 本层最左index (队头的 index)
        const leftmostIndex = queue[0][1];
        // 先把rightmost 设为左边, 遍历中不断更新
        let rightmostIndex = leftmostIndex;

        for (let k = 0; k < levelSize; k++) {
            const [node, i] = queue.shift()!;

            if (node.left) queue.push([node.left, 2 * i + 1]);
            if (node.right) queue.push([node.right, 2 * i + 2]);

            rightmostIndex = i;  // 本层最后弹出的, 就是本层最右
        }

        // 宽度 = 右 - 左 + 1
        maxWidth = Math.max(maxWidth, rightmostIndex - leftmostIndex + 1);
    }

    return maxWidth;
}