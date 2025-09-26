/**
 * Time Complexity: O(logn)
 * Space Complexity: O(1)
 * @param nums 
 * @param target 
 */
export function findTargetInRotatedSortedArray(nums: number[], target: number): number {
    if (nums.length === 0) return -1;

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) return mid;

        // Left half [left..mid] is sorted
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            //Right half [mid..right] is sorted
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
}