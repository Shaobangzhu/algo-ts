/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param s 
 */
export function evaluateExpression(s: string): number {
    const stack: number[] = [];
    let currNum = 0;
    let sign = 1;
    let res = 0;

    for (const c of s) {
        if (/\d/.test(c)) {
            currNum = currNum * 10 + parseInt(c, 10);
        } else if (c === "+" || c === "-") {
            res += currNum * sign;
            sign = c === "-" ? -1 : 1;
            currNum = 0;
        } else if (c === "(") {
            stack.push(res);
            stack.push(sign);
            res = 0;
            sign = 1;
        } else if (c === ")") {
            res += sign * currNum;
            currNum = 0;
            res *= stack.pop()!; // sign
            res += stack.pop()!; // previous result
        }
    }

    return res + currNum * sign;
}