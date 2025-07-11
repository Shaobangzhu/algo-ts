// 1. Two Sum
// The input array is not sorted and we want the index returned instead the value
/**
 * Method One: Brutal Force with Flag
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 * @param nums input array
 * @param target target number 
 */
function twoSum1(nums: number[], target: number): number[] {
    const res: number[] = [];
    const length = nums.length;

    if (length === 0) return res;
    for(let i = 0; i < length; i++) {
        const n1 = nums[i];
        let flag = false;
        for(let j = i + 1; j < length; j++) {
            const n2 = nums[j];
            if(n1 + n2 === target){
                res.push(i);
                res.push(j);
                flag = true;
                break;
            }
        }
        if(flag) break;
    }
    return res;
};

/**
 * Hash Map Method
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param nums 
 * @param target 
 */
export function twoSum2(nums: number[], target: number): number[] {
    const map = new Map<number, number>(); // value -> index
    for(let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if(map.has(diff)) {
            return [map.get(diff)!, i];
        }
        map.set(nums[i], i);
    }
    return [];
}