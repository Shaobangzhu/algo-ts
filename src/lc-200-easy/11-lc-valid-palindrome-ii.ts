/**
 * 680. Valid Palindrome II
 * Given a string s, return TRUE if the s can be palindrome after deleting at most one character from it
 * Time Complexity: O()
 * Space Complexity: O()
 * @param s 
 */
export function validPalindromeii(s: string): boolean {
    const isPalindrome = (left: number, right: number): boolean => {
        while(left < right) {
            if (s[left] !== s[right]) return false;
            left++;
            right--;
        }
        return true;
    }

    let left = 0, right = s.length - 1;

    while(left < right) {
        if(s[left] !== s[right]) {
            // Try skipping s[left] or s[right]
            return isPalindrome(left + 1, right) || isPalindrome(left, right - 1);
        }
        left++;
        right--;
    }
    return true;
}