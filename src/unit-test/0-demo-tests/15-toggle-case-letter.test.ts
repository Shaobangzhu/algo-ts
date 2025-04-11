/**
 * @description Toggle the letter case in a string test
 * @author clu
 */ 

import { toggleLetterCase2 } from "../../0-demo/15-toggle-case-letter";

describe.only('Toggle the letter case in a string test', () => {
    it('functional test', () => {
        const res = toggleLetterCase2('aBNc3Min');
        expect(res).toBe('AbnC3mIN');
    })

    it('empty string', () => {
        const res = toggleLetterCase2('');
        expect(res).toBe('');
    })

    it('pure number', () => {
        const res = toggleLetterCase2('100');
        expect(res).toBe('100');
    })
})