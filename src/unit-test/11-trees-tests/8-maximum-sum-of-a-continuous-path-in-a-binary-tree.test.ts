import { maxPathSum } from "../../11-trees/8-maximum-sum-of-a-continuous-path-in-a-binary-tree";
import { arrayToTree } from "../../utils/test-helpers";

describe('maxPathSum', () => {
  it('simple balanced tree', () => {
    // [1,2,3] -> 2 + 1 + 3 = 6
    const root = arrayToTree([1, 2, 3]);
    expect(maxPathSum(root)).toBe(6);
  });

  it('includes both children at a turning node', () => {
    // [-10,9,20,null,null,15,7] -> 15 + 20 + 7 = 42
    const root = arrayToTree([-10, 9, 20, null, null, 15, 7]);
    expect(maxPathSum(root)).toBe(42);
  });

  it('all negatives returns the largest (least negative) node', () => {
    // [-3,-2,-5] -> -2
    const root = arrayToTree([-3, -2, -5]);
    expect(maxPathSum(root)).toBe(-2);
  });

  it('single node', () => {
    const root = arrayToTree([2]);
    expect(maxPathSum(root)).toBe(2);
  });

  it('skewed chain uses one side repeatedly', () => {
    // [1,2,null,3,null,4] (left chain) -> 1+2+3+4 = 10
    const root = arrayToTree([1, 2, null, 3, null, 4]);
    expect(maxPathSum(root)).toBe(10);
  });

  it('empty tree (optional guard)', () => {
    const root = arrayToTree([] as any); // or just pass null if your helper allows
    expect(maxPathSum(root)).toBe(0);
  });
});
