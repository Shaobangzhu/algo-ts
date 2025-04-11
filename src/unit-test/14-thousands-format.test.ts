/**
 * @description Thousand Separator Formatting Test
 * @author clu
 */

import { thousandSepFormat2 } from "../14-thousands-format";

describe("format the number with thousand separators", () => {
    it('functional test', () => {
        const input = 1020109000;
        const res = thousandSepFormat2(input);
        expect(res).toEqual('1,020,109,000');
    })

    it('input < 1000', () => {
        const res = thousandSepFormat2(10);
        expect(res).toEqual('10');
    })
})