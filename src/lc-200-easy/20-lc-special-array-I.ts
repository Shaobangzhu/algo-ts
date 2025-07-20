/**
 * 3151. Special Array I
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param nums
 */
export function isArraySpecial(nums: number[]): boolean {
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === nums[i+1] % 2) return false;
    }
    return true;
}