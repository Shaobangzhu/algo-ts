/**
 * @description binary search test
 * @author clu
 */

import { getKthMinValue, ITreeNode } from "../../0-demo/8-kth-min-in-binary-search-tree";

describe("Get kth min number from a BST", () => {
  const bst_root: ITreeNode = {
    value: 5,
    left: {
      value: 3,
      left: {
        value: 2,
        left: null,
        right: null,
      },
      right: {
        value: 4,
        left: null,
        right: null,
      },
    },
    right: {
      value: 7,
      left: {
        value: 6,
        left: null,
        right: null,
      },
      right: {
        value: 8,
        left: null,
        right: null,
      },
    },
  };
  it("functional test", () => {
    const arr: number[] = [];
    const res = getKthMinValue(bst_root, 3, arr);
    expect(res).toEqual(4);
  });
  it("k is out of range", () => {
    const arr: number[] = [];
    const res = getKthMinValue(bst_root, 1000, arr);
    expect(res).toBeNull;
  });
});
