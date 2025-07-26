/**
 * Pair Sum - Unsorted
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param nums 
 * @param target 
 */
export function pairSumUnsorted(nums: number[], target: number): number[] {
    let map = new Map<number, number>();
    for(let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (map.has(diff)) {
            return [map.get(diff)!, i];
        }
        map.set(nums[i],i);
    }
    return [];
}