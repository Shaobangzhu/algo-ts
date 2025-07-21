/**
 * 70. Climbing Stairs
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param n 
 */
export function climbStairs(n: number): number {
    if (n <= 1) return 1;

    let prev2 = 1, prev1 = 1;
    for(let i = 2; i <= n; i++){
        const curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }

    return prev1;
}