/**
 * Time Complexity: O(n)
 * Space Complexity: O(m)
 * @param s 
 */
export function longestSubstringWithUniqueChars(s: string): number {
    let maxLen = 0;
    const window = new Set<string>();
    let left = 0;
    let right = 0;

    while (right < s.length) {
        const ch = s[right];
        if (!window.has(ch)) {
            window.add(ch);                              // expand the window
            maxLen = Math.max(maxLen, right - left + 1);
            right++;
        } else {
            window.delete(s[left]);                      // shrink the window
            left++;
        }
    }
    return maxLen;
}

/**
 * Time Complexity: O(n)
 * Space Complexity: O(m)
 * @param s 
 * @returns 
 */
export function longestSubstringWithUniqueCharsOptimized(s: string): number {
    let maxLen = 0;
    const lastSeen = new Map<string, number>(); // char -> most recent index
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        const ch = s[right];
        const prev = lastSeen.get(ch);

        // If ch was seen inside the current window, move left past it
        if (prev !== undefined && prev >= left) {
            left = prev + 1;
        }

        maxLen = Math.max(maxLen, right - left + 1);
        lastSeen.set(ch, right); // update most recent index
    }
    return maxLen;
}