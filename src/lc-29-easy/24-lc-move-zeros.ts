/**
 * 283. Move Zeros
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param nums 
 */
export function moveZeros(nums: number[]): void {
    let insertPos = 0;

    // 先把所有非零的元素放在前面
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[insertPos++] = nums[i]; 
        }
    }

    while (insertPos < nums.length) {
        nums[insertPos++] = 0;
    } 
}