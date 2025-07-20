/**
 * 1768. Merge Strings Alternately
 * Time Complexity: O(n + m)
 * Space Complexity: O(n + m)
 * @param word1 
 * @param word2 
 */
export function mergeAlternatively(word1: string, word2: string): string {
    let i = 0;
    let result: string = "";
    while(i < word1.length || i < word2.length) {
        if (i < word1.length) result += word1[i];
        if (i < word2.length) result += word2[i];
        i++;
    }
    return result;
}