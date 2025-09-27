/**
 * Validates if a string of brackets is balanced
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param s 
 */
export function validParenthesisExpression(s: string): boolean {
    const map: Record<string, string> = {
        '(': ')',
        '{': '}',
        '[': ']',
    };

    const stack: string[] = [];

    for (const ch of s) {
        if(map[ch]) {
            // Opening bracket
            stack.push(ch);
        } else {
            // Closing (or invalid) char: must match the last opening
            const last = stack.pop();
            if (!last || map[last] !== ch) return false;
        }
    }

    // All openings must be closed
    return stack.length === 0;
}