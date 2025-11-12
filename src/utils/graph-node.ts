class GraphNode {
    val: number;
    neighbors: GraphNode[];

    constructor(val: number, neighbors: GraphNode[] = []) {
        this.val = val;
        this.neighbors = neighbors;
    }
}

export default GraphNode;
