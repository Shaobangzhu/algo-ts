/**
 * @description Toggle the letter case in a string
 * @author clu
 */

// Regular Expression
export function toggleLetterCase1(s: string): string {
    let res = ''

    const length = s.length;
    if (length === 0) return res;

    const reg1 = /[a-z]/;
    const reg2 = /[A-Z]/;

    for (let i = 0; i < length; i++) {
        const c = s[i];
        if (reg1.test(c)) {
            res += c.toUpperCase();
        } else if (reg2.test(c)) {
            res += c.toLowerCase();
        } else {
            res += c;
        }
    }
    return res;
}

// ASCII CODE
export function toggleLetterCase2(s: string): string {
    let res = ''

    const length = s.length;
    if (length === 0) return res;

    for (let i = 0; i < length; i++) {
        const c = s[i];
        const code = c.charCodeAt(0);

        if (code >= 65 && code <= 90) {
            res += c.toLowerCase();
        } else if (code >= 97 && code <= 122) {
            res += c.toUpperCase();
        } else {
            res += c;
        }
    }
    return res;
}