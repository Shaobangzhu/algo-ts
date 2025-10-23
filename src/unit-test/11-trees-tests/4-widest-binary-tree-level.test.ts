import { widestBinaryTreeLevel } from "../../11-trees/4-widest-binary-tree-level";
import { arrayToTree } from "../../utils/test-helpers";

describe('widest binary tree level', () => {
    it('example: [1, 3, 2, 5, 3, null, 9] => 4', () => {
        const root = arrayToTree([1, 3, 2, 5, 3, null, 9]);
        expect(widestBinaryTreeLevel(root)).toBe(4);
    });
});