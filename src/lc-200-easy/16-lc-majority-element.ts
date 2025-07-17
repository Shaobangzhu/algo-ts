// 169. Majority Element

/**
 * Method1: 哈希表计数
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param nums
 */
function majorityElement1(nums: number[]): number {
    const map = new Map<number, number>();
    const threshold = Math.floor(nums.length / 2);

    for (const num of nums) {
        const count = (map.get(num) || 0) + 1;
        if (count > threshold) return num;
        map.set(num, count);
    }

    return -1;
}

/**
 * Method2: 摩尔投票法 (Boyer-Moore Voting Algorithm)
 * @param nums 
 */
export function majorityElement2(nums: number[]): number {
    let count = 0;
    let candidate: number | null = null;

    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    return candidate!;
}