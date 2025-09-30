/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param nums 
 */
export function nextLargestNumberToTheRight(nums: number[]): number[] {
    const res: number[] = new Array(nums.length).fill(0);
    const stack: number[] = [];

    // Traverse from right to the left
    for (let i = nums.length - 1; i >= 0; i--) {
        // Pop until the top of the stack is strictly greater than nums[i]
        while( stack.length > 0 && stack[stack.length - 1] <= nums[i]) {
            stack.pop();
        }

        // If stack is empty, no greater element to the right
        res[i] = stack.length > 0 ? stack[stack.length - 1] : -1;

        // Push current value as a candidate for elements to its left
        stack.push(nums[i]);
    }

    return res;
}