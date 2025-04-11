/**
 * @description Quick Sort
 * @author clu
 */

/**
 * Quick Sort using Splice
 * @param arr 
 * @returns 
 */
export function quickSort1(arr: number[]): number[] {
    const length = arr.length;
    if (length === 0) return arr;

    const midIndex = Math.floor(length / 2);
    const midValue = arr.splice(midIndex, 1)[0];

    const left: number[] = [];
    const right: number[] = [];

    // Note: we use arr.length again, because splice method in previous step has altered the length of the array
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (num < midValue) {
            left.push(num);
        } else {
            right.push(num);
        }
    }

    return quickSort1(left).concat([midValue], quickSort1(right));
}

/**
 * Quick Sort using Slice
 * @param arr 
 * @returns 
 */
export function quickSort2(arr: number[]): number[] {
    const length = arr.length;
    if (length === 0) return arr;

    const midIndex = Math.floor(length / 2);
    const midValue = arr.slice(midIndex, midIndex + 1)[0];

    const left: number[] = [];
    const right: number[] = [];

    for (let i = 0; i < length; i++) {
        if (i === midIndex) continue;
        const num = arr[i];
        if (num < midValue) {
            left.push(num);
        } else {
            right.push(num);
        }
    }

    return quickSort2(left).concat([midValue], quickSort2(right));
}