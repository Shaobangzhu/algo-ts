/**
 * @description Binary Search
 * @author clu
 */

/**
 * Binary Search implemented by Iteration
 * @param arr arr
 * @param target target
 * @returns Index number of target or -1
 */
export function binarySearch1(arr: number[], target: number): number {
    const length = arr.length;
    if (length === 0) return -1;

    let startIndex = 0; // 开始位置
    let endIndex = length - 1; // 结束位置

    while (startIndex <= endIndex) {
        const midIndex = Math.floor((startIndex + endIndex) / 2);
        const midValue = arr[midIndex];
        if (target < midValue) {
            // 目标值较小，则继续向左侧查找
            endIndex = midIndex - 1;
        } else if (target > midValue) {
            // 目标值较大, 则继续向右侧查找
            startIndex = midIndex + 1;
        } else {
            // 相等，返回
            return midIndex;
        }
    }

    return -1;
}

/**
 * Binary Search implemented by Recursion
 * @param arr arr
 * @param target target
 * @param startIndex 
 * @param endIndex 
 * @returns Index of target or -1
 */
export function binarySearch2(arr: number[], target: number, startIndex?: number, endIndex?: number): number {
    const length = arr.length;
    if (length === 0) return -1;

    // 开始和结束的范围
    if (startIndex == null) startIndex = 0;
    if(endIndex == null) endIndex = length - 1;

    // 如果start和end相遇，则结束
    if (startIndex > endIndex) return -1;

    // 中间位置
    const midIndex = Math.floor((startIndex + endIndex) / 2);
    const midValue = arr[midIndex];

    if (target < midValue) {
        // 目标值较小, 则继续在左侧查找
        return binarySearch2(arr, target, startIndex, midIndex - 1);
    } else if (target > midValue) {
        // 目标值较大, 则继续在右侧查找
        return binarySearch2(arr, target, midIndex + 1, endIndex);
    } else {
        // 相等, 返回
        return midIndex;
    }
}