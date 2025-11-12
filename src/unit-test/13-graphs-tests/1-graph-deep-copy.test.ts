import GraphNode from "../../utils/graph-node";
import { serializeGraph } from "../../utils/test-helpers";
import { graphDeepCopy } from "../../13-graphs/1-graph-deep-copy";

function link(a: GraphNode, b: GraphNode) {
  a.neighbors.push(b);
  return [a, b] as const;
}

describe("graphDeepCopy", () => {
  it("returns null for empty input", () => {
    expect(graphDeepCopy(null)).toBeNull();
  });

  it("clones a single node (no neighbors)", () => {
    const a = new GraphNode(1);
    const clone = graphDeepCopy(a)!;

    expect(clone).not.toBe(a);
    expect(clone.val).toBe(1);
    expect(clone.neighbors).toHaveLength(0);

    // independence
    a.neighbors.push(a); // mutate original
    expect(clone.neighbors).toHaveLength(0);
  });

  it("clones a cyclic graph", () => {
    // Build:
    // 1 -- 2
    // |  \ |
    // 3 --  (triangle between 1,2,3), plus a self-loop on 3, and 2->4
    const n1 = new GraphNode(1);
    const n2 = new GraphNode(2);
    const n3 = new GraphNode(3);
    const n4 = new GraphNode(4);

    // Undirected edges modeled by two directed links
    link(n1, n2); link(n2, n1);
    link(n1, n3); link(n3, n1);
    link(n2, n3); link(n3, n2);
    link(n2, n4); link(n4, n2);
    // self-loop
    n3.neighbors.push(n3);

    const clone = graphDeepCopy(n1)!;

    // Structure preserved
    expect(serializeGraph(n1)).toEqual(serializeGraph(clone));

    // Nodes are distinct objects (no aliasing)
    expect(clone).not.toBe(n1);
    const [c2] = clone.neighbors; // likely node 2
    expect(c2).not.toBe(n2);

    // Mutating original after clone should not affect clone
    const before = serializeGraph(clone);
    n1.neighbors.push(n4); // add an extra edge in original
    const afterOriginal = serializeGraph(n1);
    const afterClone = serializeGraph(clone);

    expect(afterClone).toEqual(before);
    expect(afterOriginal).not.toEqual(afterClone);
  });

  it("handles disconnected graphs by cloning the reachable component", () => {
    const a1 = new GraphNode(10);
    const a2 = new GraphNode(11);
    const b1 = new GraphNode(99); // disconnected component

    link(a1, a2); link(a2, a1);
    // b1 is isolated and unreachable from a1

    const clone = graphDeepCopy(a1)!;
    const reachableOriginal = serializeGraph(a1);
    const reachableClone = serializeGraph(clone);

    expect(reachableClone).toEqual(reachableOriginal);
    // The disconnected node is not part of the clone’s reachable set
    expect(Object.keys(reachableClone).map(Number)).not.toContain(99);
  });
});
