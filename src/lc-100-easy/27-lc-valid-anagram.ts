/**
 * 242. Valid Anagram
 * Method 1: 使用字符频率表
 * Time Complexity: O(n)
 * Space Complexity: O(1) (因为最多只需要记录26个字母)
 * @param s 
 * @param t 
 */
export function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const count: Record<string, number> = {};

    for (const ch of s) {
        count[ch] = (count[ch] || 0) + 1;
    }

    for (const ch of t) {
        if (!count[ch]) return false;
        count[ch]--;
    }

    return true;
}

/**
 * Method 2：排序后比较
 * Time Complexity: O(nlogn) 排序时间
 * Space Complexity: O(1)
 * @param s 
 * @param t 
 */
function isAnagram2(s: string, t: string): boolean {
    return s.split("").sort().join("") === t.split("").sort().join("");
}