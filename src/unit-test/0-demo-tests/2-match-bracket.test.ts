import { matchBracket } from "../../0-demo/2-match-bracket";

describe('判断括号是否匹配', () => {
    it('功能测试, 结果匹配', () => {
        const str = '{a(b[c]d)e}f'
        const res = matchBracket(str)
        expect(res).toBe(true)
    })

    it('功能测试, 结果不匹配', () => {
        const str = '{a(b[(c]d)e}f'
        const res = matchBracket(str)
        expect(res).toBe(false)
    })

    it('顺序不一致的', () => {
        const str = '{a(b[c]d}e)f'
        const res = matchBracket(str)
        expect(res).toBe(false)
    })

    it('空字符串', () => {
        const res = matchBracket('')
        expect(res).toBe(true)
    })
})