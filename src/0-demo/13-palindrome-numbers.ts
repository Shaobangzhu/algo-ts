/**
 * @description Find palindrome numbers in 1-1000
 * @author clu
 */

/**
 * String Reversal
 * 1. Convert the number to a string
 * 2. Reverse the string
 * 3. Check if the reversed string matches the original string
 * @param max 
 * @returns 
 */
export function findPalindromeNumbers1(max: number): number[] {
    const res: number[] = [];
    if (max <= 0) return res;

    for (let i = 1; i <= max; i++) {
        const num_str = i.toString();
        if (num_str === num_str.split('').reverse().join('')) {
            res.push(i);
        }
    }

    return res;
}

/**
 * Compare characters
 * Compare characters from both ends moving towards the center
 * @param max 
 * @returns 
 */
export function findPalindromeNumbers2(max: number): number[] {
    const res: number[] = [];
    if (max <= 0) return res;

    for (let i = 1; i <= max; i++) {
        const num_str = i.toString();
        const length = num_str.length;

        let flag = true;
        let startIndex = 0;
        let endIndex = length - 1;
        while(startIndex < endIndex) {
            if (num_str[startIndex] !== num_str[endIndex]) {
                flag = false;
                break;
            } else {
                startIndex++;
                endIndex--;
            }
        }
        if(flag) {
            res.push(i);
        }
    }

    return res;
}

/**
 * Reverse the number mathematically without converting to a string
 * @param max 
 * @returns 
 */
export function findPalindromeNumbers3(max: number): number[] {
    const res: number[] = [];
    if (max <= 0) return res;

    for (let i = 1; i <= max; i++) {
        let num = i;
        let rev_num = 0;

        while (num > 0) {
            rev_num = rev_num * 10 + num % 10;
            num = Math.floor(num / 10);
        }

        if (i === rev_num) res.push(i);
    }

    return res;
}