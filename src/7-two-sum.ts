/**
 * @description Binary Search
 * @author clu
 */

/**
 * Two Sum (Brutal force using nested for loop)
 * @param arr 
 * @param n 
 * @returns 
 */
export function twoSum1(arr: number[], n: number): number[] {
    const res: number[] = [];

    const length = arr.length;
    if (length === 0) return res;

    for (let i = 0; i < length; i++) {
        const n1 = arr[i];
        let flag = false;

        for (let j = i + 1; j < length; j++) {
            const n2 = arr[j];

            if (n1 + n2 === n) {
                res.push(n1);
                res.push(n2);
                flag = true;
                break;
            }
        }

        if(flag) break;
    }

    return res;
}

/**
 * Two Sum (Two Pointers)
 * @param arr 
 * @param n 
 * @returns 
 */
export function twoSum2(arr: number[], n: number): number[] {
    const res: number [] = [];

    const length = arr.length;
    if (length === 0) return res;
    let i = 0;
    let j = length - 1;

    while (i < j) {
        const n1 = arr[i];
        const n2 = arr[j];
        const sum = n1 + n2;

        if (sum > n) {
            // sum 大于n, 则j要向前移动
            j--;
        } else if (sum < n) {
            // sum 小于n, 则i要向后移动
            i++;
        } else {
            //相等
            res.push(n1);
            res.push(n2);
            break;
        }
    }

    return res;
}