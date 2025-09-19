/**
 * First and Last Occurrences of a Number
 * Time Complexity: O(log(n))
 * Space Complexity: O(1)
 * @param nums 
 * @param target 
 */
export function firstAndLastOccurrencesOfANumber(
  nums: number[],
  target: number
): [number, number] {
    if (nums.length === 0) return [-1, -1];

    const lower = lowerBoundBinarySearch(nums, target);
    const upper = upperBoundBinarySearch(nums, target);
    return [lower, upper];
}

/**
 * Lower-bound binary search:
 * returns the index of the first occurrence of `target` in `nums`,
 * or -1 if not found
 * @param nums 
 * @param target 
 */
function lowerBoundBinarySearch(nums: number[], target: number): number {
    if (nums.length === 0) return -1;

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            // shrink to the left side to find the first occurrence
            right = mid;
        }
    }

    return nums[left] === target ? left : -1;
}

/**
 * Upper-bound binary search:
 * returns the index of the last occurrence of `target` in `nums`,
 * or -1 if not found
 * @param nums
 * @param target 
 */
function upperBoundBinarySearch(nums: number[], target: number): number {
    if (nums.length === 0) return -1;

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        // bias midpoint to the right to avoid infinite loop
        const mid = Math.floor((left + right) / 2) + 1;

        if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            // expand to the right side to find the last occurrence
            left = mid;
        }
    }

    return nums[right] === target ? right : -1;
}