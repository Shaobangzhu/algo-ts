/**
 * Find the insertion index
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 * @param nums 
 * @param target 
 */
export function findInsertionIndex(nums: number[], target: number): number {
    let left = 0;
    let right  = nums.length; // search space is [left, right)

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] >= target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}