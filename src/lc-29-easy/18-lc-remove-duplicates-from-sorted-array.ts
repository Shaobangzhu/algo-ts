/**
 * 26. Remove Duplicates from Sorted Array
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param nums 
 * @returns 
 */
export function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;

    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if(nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}