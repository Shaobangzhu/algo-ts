// Pair Sum - Sorted

// Method 1: Brutal Force 
// Time Complexity: O(n^2)
// Space Complexity: O(1)
function pairSumSortedBruteForce(nums: number[], target: number): number[] {
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

// Method 2:
// Time Complexity: O(n)
// Space Complexity: O(1)
export function pairSumSorted(nums: number[], target: number): number[] {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum < target) {
            left++;
        } else if (sum > target) {
            right--;
        } else {
            return [left, right]
        }
    }

    return [];
}