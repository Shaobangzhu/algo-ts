/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param s 
 */
export function isPalindromeValid(s: string): boolean {
    let left = 0;
    let right = s.length - 1;

    while(left < right) {
        // Skip non-alphanumeric characters from the left
        while (left < right && !isAlphaNumeric(s[left])) {
            left++;
        }

        // Skip non-alphanumeric characters from the right
        while (left < right && !isAlphaNumeric(s[right])) {
            right--;
        }

        // Compare characters case-insensitively
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

// Helper function to check if a character is alphanumeric
function isAlphaNumeric(char: string): boolean {
    return /^[a-z0-9]$/i.test(char);
}