/**
 * @description Finds the character that appears most continuously in a string.
 * Example:
 *   Input: "aaabbccccd"
 *   Output: { char: 'c', length: 4 }
 * @author clu
 */

interface IResult {
    char: string
    length: number
}

/**
 * The function scans through the input string and identifies:
 * - The character that repeats the most in a row (continuously).
 * - The length of its longest continuous sequence.
 *
 * Time Complexity: O(n)
 *
 * @param {string} str - The input string to search.
 * @returns {IResult} An object containing the character and the maximum continuous length.
 */
export function findContinuousChar1(str: string): IResult {
    const res: IResult = {
        char: '',
        length: 0
    }

    const length = str.length
    if (length === 0) return res

    let tempLength = 0; // record the current length of the string

    for (let i = 0; i < length; i++) {
        tempLength = 0; // reset

        for (let j = i; j < length; j++) {
            if (str[i] === str[j]) {
                tempLength++;
            } else {
                break;
            }
        }

        if (tempLength > res.length) {
            res.char = str[i];
            res.length = tempLength;
        }

        i += tempLength - 1;
    }

    return res;
}