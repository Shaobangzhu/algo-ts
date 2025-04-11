/**
 * @description Thousand Separator Formatting
 * @author clu
 */

/**
 * Format a number with thousand separators using reverse and reduce.
 * Example: 12345678 -> "12,345,678"
 */
export function thousandSepFormat1(num: number): string {
    num = Math.floor(num);

    const numStr = num.toString();
    const arr = numStr.split('').reverse();
    return arr.reduce((prev, val, index) => {
        if (index % 3 === 0) {
            if (prev) {
                return val + ',' + prev;
            } else {
                return val;
            }
        } else {
            return val + prev;
        }
    }, '');
}

/**
 * Format a number with thousand separators using a for loop backward.
 * Example: 12345678 -> "12,345,678"
 */
export function thousandSepFormat2(num: number): string {
    num = Math.floor(num);

    let res = '';
    const numStr = num.toString();
    const length = numStr.length;

    for (let i = length - 1; i >= 0; i--) {
        const j = length - i;
        if (j % 3 === 0 && i !== 0) {
            res = ',' + numStr[i] + res;
        } else {
            res = numStr[i] + res;
        }
    }

    return res;
}