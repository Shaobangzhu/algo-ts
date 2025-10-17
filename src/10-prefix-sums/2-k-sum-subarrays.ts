/**
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 * @param nums 
 * @param k 
 */
export function kSumSubarrays(nums: number[], k: number): number {
    const len = nums.length;
    const prefix: number[] = [0];

    for (let i = 0; i < len; i++) {
        prefix.push(prefix[prefix.length - 1] + nums[i]);
    }

    let count = 0;
    for (let i = 1; i <= len; i++) {
        for (let j = 1; j <= i; j++) {
            if (prefix[i] - prefix[j - 1] === k) {
                count += 1;
            }
        }
    }
    return count;
}

/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param nums 
 * @param k 
 */
export function kSumSubarraysOptimized(nums: number[], k: number): number {
    const freq = new Map<number, number>();

    // Handles subarrays that start at index 0
    freq.set(0, 1);

    let currPrefixSum = 0;
    let count = 0;

    for (const num of nums) {
        currPrefixSum += num;

        // If (currPrefixSum - k) has been seen t times, then there are t subarrays
        // ending here with sum k
        const needed = currPrefixSum - k;
        const seen = freq.get(needed);
        if (seen !== undefined) count += seen;

        // Update frequency of current running prefix sum
        freq.set(currPrefixSum, (freq.get(currPrefixSum) ?? 0) + 1);
    }

    return count;
}