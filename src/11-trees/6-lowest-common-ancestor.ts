import TreeNode from "../utils/tree-node";

/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param root 
 * @param p 
 * @param q 
 */
export function lowestCommonAncestor(root: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null {
    let lca: TreeNode | null = null;

    if (p === q) return p;

    function dfs(node: TreeNode | null): boolean {
        if (!node) return false;

        const nodeIsPQ = node === p || node === q;
        const leftHas = dfs(node.left);
        const rightHas = dfs(node.right);

        // If any two of the three are true, current node is LCA
        if ((nodeIsPQ ? 1 : 0) + (leftHas ? 1: 0) + (rightHas ? 1 : 0) === 2 && lca === null) {
            lca = node;
        }
        // Return whether this subtree contains p or q
        return nodeIsPQ || leftHas || rightHas;
    }

    dfs(root);
    return lca;
}