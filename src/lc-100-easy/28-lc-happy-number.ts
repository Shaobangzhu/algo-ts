/**
 * 202. Happy Number
 * Method 1: 原始Set方法
 * Time Complexity:O(logn)
 * Space Complexity:O(logn)
 * @param n
 */
function isHappy1(n: number): boolean {
  const seen = new Set<number>();

  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    n = getNext(n);
  }

  return n === 1;
}

/**
 * Method 2: Floyd方法-快慢指针
 * Time Complexity:O(logn)
 * Space Complexity:O(1)
 * @param n
 */
export function isHappy(n: number): boolean {
    let slow = n, fast = getNext(n);

    while(fast !== 1 && fast !== slow) {
        slow = getNext(slow);
        fast = getNext(getNext(fast));
    }

    return fast === 1;
}

function getNext(n: number): number {
  let sum = 0;
  while (n > 0) {
    const digit = n % 10
    sum += digit * digit;
    n = Math.floor(n / 10);
  }
  return sum;
}
