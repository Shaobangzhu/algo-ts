/**
 * 20. Valid Parenthese
 * Given a string s containing just the characters '(',')','{','}','[' and ']', determine if the input string is valid
 * Time Complexity: O(n) - Each character is processed exactly once
 * Space Complexity: O(n) - Stack may contain all opening brackets is worst case
 * @param s
 */
export function isValidParentheses(s: string): boolean {
    const stack: string[] = [];
    const pairs: {[key: string]: string} = {
        ")":"(",
        "]":"[",
        "}": "{"
    };
    for(const char of s) {
        if (char === "(" || char === "[" || char === "{") {
            stack.push(char);
        } else if (char === ")" || char === "]" || char === "}"){
            const top = stack.pop();
            if (top !== pairs[char]) {
                return false;
            }
        } else {
            return false;
        }
    }
    return stack.length === 0;
}