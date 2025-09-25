/**
 * Time Complexity: O(nlog(m))
 * Space Complexity: O(1)
 * @param heights 
 * @param k 
 */
export function cuttingWood(heights: number[], k: number): number {
    let left = 0;
    let right = Math.max(...heights);

    while (left < right) {
        // Bias midpoint to the right (upper bound)
        const mid = Math.floor((left + right) / 2) + 1;

        if (cutsEnoughWood(mid, k, heights)) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }

    return right;
}

/**
 * Determine if height H yields at least k meters of wood
 * @param H 
 * @param k 
 * @param heights 
 */
function cutsEnoughWood(H: number, k: number, heights: number[]): boolean {
    let woodCollected = 0;
    
    for (const height of heights) {
        if(height > H) {
            woodCollected += height - H;
        }
    }

    return woodCollected >= k;
}