/**
 * Counts how many substrings of `s` are anagrams of `t`
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param s 
 * @param t 
 */
export function substringAnagrams(s: string, t: string): number {
    const lenS = s.length;
    const lenT = t.length;
    if (lenT > lenS) return 0;

    const A = "a".charCodeAt(0);
    const expected = new Array<number>(26).fill(0);
    const window = new Array<number>(26).fill(0);

    // Populate expected freqs from t
    for (const ch of t) {
        expected[ch.charCodeAt(0) - A] += 1;
    }

    let left = 0;
    let right = 0;
    let count = 0;

    // Helper: compare two freq arrays
    const same = (a: number[], b: number[]) => {
        for (let i = 0; i < 26; i++) if (a[i] !== b[i]) return false;
        return true;
    }

    while (right < lenS) {
        // Add right char to window
        window[s.charCodeAt(right) - A] += 1;

        // When window reaches size LenT, check & slide
        if (right -left + 1 === lenT) {
            if (same(window, expected)) count += 1;

            // Remove left char and move left forward
            window[s.charCodeAt(left) - A] -= 1;
            left += 1;
        }

        right += 1;
    }

    return count;
}