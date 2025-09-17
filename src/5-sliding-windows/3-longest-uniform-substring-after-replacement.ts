/**
 * Longest substring that can be made uniform by replacing at most k chars
 * Sliding-window
 * Time Complexity: O(n)
 * Space Complexity: O(m) m is the number of unique characters in the string stored in the hash map freqs
 * @param s 
 * @param k 
 */
export function longestUniformSubstringAfterReplacements(s: string, k: number): number {
    const freq = new Map<string, number>();
    let left = 0;
    let maxLen = 0;
    let highestFreq = 0; // highest single-character frequency inside current window

    for (let right = 0; right < s.length; right++) {
        const ch = s[right];
        const count = (freq.get(ch) ?? 0) + 1;
        freq.set(ch, count);

        // Track the highest frequency seen in the window
        if (count > highestFreq) highestFreq = count;

        // How many chars would we need to replace to make the window uniform?
        const windowLen = right -left + 1;
        const toReplace = windowLen - highestFreq;

        // If replacements needed exceed k, shrink from the left
        if (toReplace > k) {
            const leftCh = s[left];
            freq.set(leftCh, (freq.get(leftCh) ?? 0) - 1);
            left += 1;
            // Note: we don't recompute highestFreq when shrinking; it can be stale.
            // This is okay because windowLen - highestFreq remains an upper bound,
            // preserving correctness while keeping O(n) time.
        }

        // Record the best window size
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}