/**
 * @description Find the kth smallest value node in a Binary Search Tree
 * @author clu
 */

/**
 * Traverse a Binary Tree
 * Pre-Order: root -> left -> right
 * In-Order: left -> root -> right
 * Post-Order: left -> right -> root
 */

export interface ITreeNode {
  value: number;
  left: ITreeNode | null;
  right: ITreeNode | null;
}

/**
 * Pre-Order Traverse
 * @param node 
 * @returns 
 */
function preOrderTraverse(node: ITreeNode | null) {
    if (node == null) return;
    console.log(node.value);
    preOrderTraverse(node.left);
    preOrderTraverse(node.right);
}

/**
 * In-Order Traverse
 * @param node 
 * @returns 
 */
function inOrderTraverse(node: ITreeNode | null) {
    if (node == null) return;
    preOrderTraverse(node.left);
    console.log(node.value);
    preOrderTraverse(node.right);
}

/**
 * Post-Order Traverse
 * @param node 
 * @returns 
 */
function postOrderTraverse(node: ITreeNode | null) {
    if (node == null) return;
    preOrderTraverse(node.left);
    preOrderTraverse(node.right);
    console.log(node.value);
}

/**
 * Function to find the k-th smallest value in a Binary Search Tree (BST)
 * @param node 
 * @param k 
 * @param arr 
 * @returns the k-th smallest value
 */
export function getKthMinValue(node: ITreeNode, k: number, arr: number[]): number | null {
    inOrderHelper(node, arr);
    return arr[k - 1] || null;
}

/**
 * Helper function to perform in-order traversal (Left -> Root -> Right)
 * @param node 
 * @param arr 
 * @returns nothing
 */
function inOrderHelper(node: ITreeNode | null, arr: number[]): void {
    if(node == null) return;
    inOrderHelper(node.left, arr);
    arr.push(node.value);
    inOrderHelper(node.right, arr);
}