/**
 * 412. Fizz Buzz
 * Time Complexity:O(n)
 * Space Complexity:O(n)
 * @param n
 */
export function fizzBuzz(n: number): string[] {
    const result: string[] = [];

    for(let i = 1; i <= n; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i.toString());
        }
    }

    return result;
}