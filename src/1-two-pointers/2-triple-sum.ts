/**
 * Method1: Brutal Force
 * Time Complexity: O(n^3)
 * Space Complexity: O(n^2)
 * @param nums 
 */
export function tripletSumBruteForce(nums: number[]): number[][]{
    const n = nums.length;
    const triplets = new Set<string>();
    const result: number[][] = [];

    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            for(let k = j + 1; k < n; k++){
                if(nums[i] + nums[j] + nums[k] === 0) {
                    const sortedTriplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
                    const key = sortedTriplet.join(','); // Serialize to avoid duplicates
                    if(!triplets.has(key)) {
                        triplets.add(key);
                        result.push(sortedTriplet);
                    }
                }
            }
        }
    }

    return result;
}

/**
 * Method 2: Use Pair Sum to Assist
 * Time Complexity: O(n^2 + nlogn = n^2)
 * Space Complexity: O(n^2)
 * @param nums 
 */
export function tripletSum(nums: number[]): number[][]{
    const triplets: number[][] = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        // Optimization: if the current number is > 0, no triplet can sum to 0
        if (nums[i] > 0) break;

        // Skip duplicate 'a' values
        if (i > 0 && nums[i] === nums[i-1]) continue;

        const pairs = pairSumSortedAllPairs(nums, i + 1, -nums[i]);
        for (const pair of pairs) {
            triplets.push([nums[i], ...pair]);
        }
    }

    return triplets;
}

function pairSumSortedAllPairs(nums: number[], start: number, target: number): number[][] {
    const pairs: number[][] = [];
    let left = start;
    let right = nums.length - 1;

    while(left < right) {
        const sum = nums[left] + nums[right];

        if(sum === target) {
            pairs.push([nums[left], nums[right]]);
            left++;

            // Skip duplicate 'b' values
            while(left < right && nums[left] === nums[left - 1]) {
                left++;
            }
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return pairs;
}