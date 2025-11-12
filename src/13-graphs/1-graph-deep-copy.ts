import GraphNode from "../utils/graph-node";

/**
 * Time Complexity: O(n + e)
 * Space Complexity: O(n)
 * @param node 
 */
export function graphDeepCopy(node: GraphNode | null): GraphNode | null {
    if (!node) return null;

    const cloneMap = new Map<GraphNode, GraphNode>();

    function dfs(cur: GraphNode): GraphNode {
        if (cloneMap.has(cur)) {
            return cloneMap.get(cur)!;
        }

        const copy = new GraphNode(cur.val);
        cloneMap.set(cur, copy);

        for (const neighbor of cur.neighbors) {
            const clonedNeighbor = dfs(neighbor);
            copy.neighbors.push(clonedNeighbor);
        }

        return copy;
    }

    return dfs(node);
}