/**
 * 3105. Longest Strictly Increasing or Strictly Decreasing Subarray
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param nums 
 * @returns 
 */
export function longestMonotonicSubarray(nums: number[]): number {
    let inc = 1, dec = 1, res = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i-1]) {
            inc += 1;
            dec = 1;
        } else if (nums[i] < nums[i-1]) {
            dec += 1;
            inc = 1;
        } else {
            inc = 1;
            dec = 1;
        }
        res = Math.max(res, inc, dec);
        
    }
    return res;
}