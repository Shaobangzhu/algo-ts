/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param nums 
 */
export function productArrayWithoutCurrentElement(nums: number[]): number[] {
    const n = nums.length;
    if (n === 0) return [];

    // res[i] will hold the product of all elements to the left of i
    const res = new Array<number>(n).fill(1);

    // Left products
    for (let i = 1; i < n; i++) {
        res[i] = res[i - 1] * nums[i - 1];
    }

    // Multiply by right products (running from right to left)
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        res[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return res;
}