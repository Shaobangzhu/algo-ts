/**
 * @description Calculates the n-th number in the Fibonacci sequence.
 * @author clu
 */

/**
 * Numero Di Fibonacci (Recusion) O(2^n)
 * @param n 
 * @returns the n-th number in the Fibonacci sequence
 */
function fibonacciRecursive(n: number): number {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

/**
 * Numero Di Fibonacci (Iteration) O(n)
 * @param n 
 * @returns the n-th number in the Fibonacci sequence
 */
export function fibonacciIterator(n: number): number {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    let n1 = 1; // record n - 1 result
    let n2 = 0; // record n - 2 result
    let res = 0;

    for (let i = 2; i <= n; i++) {
        res = n1 + n2;
        n2 = n1;
        n1 = res;
    }

    return res;
}