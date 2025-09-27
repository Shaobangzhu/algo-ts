import { validParenthesisExpression } from "../../7-stacks/1-valid-parenthesis-expression";

describe("Valid Parenthesis Expression", () => {
  it.each([
    ["", true],
    ["()", true],
    ["[]", true],
    ["{}", true],
    ["()[]{}", true],
    ["([{}])", true],
    ["{[()()]()}", true],
    ["(]", false],
    ["([)]", false],
    ["(", false],
    [")", false],
    ["{{{{", false],
    ["{", false],
    ["}{", false],
    // Non-bracket characters are treated as invalid closers (keeps parity with the Python code)
    ["a", false],
    ["(a)", false],
  ])('"%s" -> %s', (input, expected) => {
    expect(validParenthesisExpression(input)).toBe(expected);
  });
});
