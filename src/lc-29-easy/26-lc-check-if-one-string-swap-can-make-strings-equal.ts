/**
 * 1790. Check if One String Swap Can Make Strings Equal
 * Method 1
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param s1 
 * @param s2 
 */
function areAlmostEqual1(s1: string, s2: string): boolean {
    if (s1 === s2) return true;

    let diff1 = -1;
    let diff2 = -1;
    let count = 0;
    
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            if (diff1 === -1) {
                diff1 = i;
                count++;
            } else if(diff2 === -1) {
                diff2 = i;
                count++;
            } else {
                return false;
            }
        }
    }
    if (count === 2 && swap(s1, diff1, diff2) === s2) {
        return true;
    }
    
    return false;
}

function swap(s: string, i: number, j: number): string {
    const chars = s.split("");
    [chars[i], chars[j]] = [chars[j], chars[i]];
    return chars.join("");
}

/**
 * Method 2
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param s1 
 * @param s2 
 */
export function areAlmostEqual(s1: string, s2: string): boolean {
    if (s1 === s2) return true;

    const diffs: number[] = [];

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            diffs.push(i);
        }
    }

    if (diffs.length !== 2) return false;

    const [i, j] = diffs;
    return s1[i] === s2[j] && s1[j] === s2[i];
}