/**
 * @description Move 0 to the end of an array
 * @author clu
 */

/**
 * The method of splice will cause a nested loop O(n^2)
 * @param arr 
 */
function moveZero1(arr: number[]): void {
    const length = arr.length;
    if (length === 0) return;

    let zeroLength = 0;
    for (let i = 0; i < length - zeroLength; i++) {
        if (arr[i] === 0) {
            arr.push(0);
            arr.splice(i, 1); // O(n)
            i--;
            zeroLength++;
        }
    }
}

/**
 * Two pointers method O(n)
 * @param arr 
 */
function moveZero2(arr: number[]): void {
    const length = arr.length;
    if (length === 0) return;

    let j = 0;
    for (let i = 0; i < length; i++) {
        if (arr[j] !== 0) {
            j++;
        } else {
            if (arr[i] !== 0) {
                arr[j] = arr[i];
                arr[i] = 0;
                j++;
            }
        }
    }
}

/**
 * Revised method from moveZero2
 * @param arr 
 */
export function moveZero3(arr: number[]): void {
    const length = arr.length;
    if (length === 0) return;

    let j = 0;
    for (let i = 0; i < length; i++) {
        if (arr[i] !== 0) {
            if (i !== j) {
                arr[j] = arr[i];
                arr[i] = 0;
            }
            j++;
        }
    }
}