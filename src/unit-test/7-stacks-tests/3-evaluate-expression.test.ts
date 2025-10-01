import { evaluateExpression } from "../../7-stacks/3-evaluate-expression";

describe('Evaluate Expression', () => {
    it('should handle simple addition', () => {
        expect(evaluateExpression("1+2")).toBe(3);
    });

    it('should handle simple substraction', () => {
        expect(evaluateExpression("5-3")).toBe(2);
    });

    it('should handle multiple digits', () => {
        expect(evaluateExpression("12+34-5")).toBe(41);
    });

    it('should handle nested parentheses', () => {
        expect(evaluateExpression("1-(2+3)")).toBe(-4);
    });

    it('should handle complex nested parentheses', () => {
        expect(evaluateExpression("18-(7+(2-4))")).toBe(13);
    });

    it("should handle leading negative numbers", () => {
        expect(evaluateExpression("-5+3")).toBe(-2);
    });

    it('should handle spaces gracefully', () => {
        expect(evaluateExpression(" 2 - ( 1 + 1) ")).toBe(0);
    });
});