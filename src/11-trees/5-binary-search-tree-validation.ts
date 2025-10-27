import TreeNode from "../utils/tree-node";

/**
 * Time Complexity: O(n) - visit each node once
 * Space Complexity: O(n) - recursion stack, h = tree height (O(n) is the worst case)
 * @param root
 * @returns
 */
export function isValidBST(root: TreeNode | null): boolean {
  return withinBounds(root, -Infinity, Infinity);
}

function withinBounds(
  node: TreeNode | null,
  lower: number,
  upper: number
): boolean {
  // Base case: empty subtree satisfies BST by definition
  if (!node) return true;

  // Current node must be strictly within (lower, upper)
  if (!(lower < node.val && node.val < upper)) return false;

  return (
    withinBounds(node.left, lower, node.val) &&
    withinBounds(node.right, node.val, upper)
  );
}
