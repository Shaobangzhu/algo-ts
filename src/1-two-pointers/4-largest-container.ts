/**
 * Largest Container
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 * @param heights 
 * @returns 
 */
function largestContainerBruteForce(heights: number[]): number{
    
    let maxWater = 0;

    // Find the maximum amount of water stored between all pairs of lines
    for(let i = 0; i < heights.length; i++) {
        for(let j = i + 1; j < heights.length; j++) {
            const water = Math.min(heights[i], heights[j]) * (j - i);
            maxWater = Math.max(maxWater, water);
        }
    }

    return maxWater;
}

export function largestContainer(heights: number[]): number {
    let maxWater = 0;
    let left = 0, right = heights.length - 1;
    while(left < right) {
        // Calculate the water contained between the current pair of lines
        const water = Math.min(heights[left], heights[right]) * (right - left);
        maxWater = Math.max(maxWater, water);
        // Move the pointers inward, always moving the pointer at the shorter line. If both lines have the same height, move both pointer inward.
        if(heights[left] < heights[right]) {
            left++;
        } else if (heights[left] > heights[right]) {
            right--;
        } else {
            left++;
            right--;
        }
    }
    return maxWater;
}