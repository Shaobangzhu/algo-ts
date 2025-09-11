/**
 * Determines whether n is a "happy number".
 * @param n
 */
export function isHappyNumber(n: number): boolean {
    if (n <= 0) return false;

    let slow = n;
    let fast = n;

    while(true) {
        slow = getNextNum(slow);
        fast = getNextNum(getNextNum(fast));

        if(fast === 1) return true;
        if(slow === fast) return false;
    }
}

/**
 * Returns the next number in the sequence:
 * sum of squares of digits of x
 * @param x 
 * @returns 
 */
function getNextNum(x: number): number {
    let next = 0;
    while (x > 0) {
        const d = x % 10;
        x = Math.floor(x / 10);
        next += d * d;
    }
    return next;
}