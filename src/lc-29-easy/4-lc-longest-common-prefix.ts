/**
 * 14. Longest Common Prefix
 * Write a function to find the longest common prefix string amongst an array of strings
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param strs
 */
export function longestCommonPrefix(strs: string[]): string {
    let prefix = strs[0];
    for(let i = 1; i < strs.length; i++) {
        while(!strs[i].startsWith(prefix)) {
            prefix = prefix.slice(0, -1);
        }
        if (prefix === "") return "";
    }
    return prefix;
}