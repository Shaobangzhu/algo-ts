/**
 * 408. Valid Word Abbreviation
 * Time Complexity: O(m+n)
 * Space Complexity: O(1)
 * @param word 
 * @param abbr 
 */
export function validWordAbbreviation(word: string, abbr: string): boolean {
    let i = 0, j = 0;
    const m = word.length, n = abbr.length;

    while(i < m && j < n) {
        const c = abbr[j];
        if(/[0-9]/.test(c)) {
            if (c === '0') return false;
            let num = 0;
            while(j < n && /[0-9]/.test(abbr[j])) {
                num = num * 10 + Number(abbr[j]);
                j++;
            }
            i += num;
        } else {
            if (word[i] !== c) return false;
            i++;
            j++;
        }
    }

    return i === m && j === n;
}