import { Logger } from "../../lc-150-easy/15-lc-logger-rate-limiter";

describe("359. Logger Rate Limiter", () => {
  let logger: Logger;

  beforeEach(() => {
    logger = new Logger();
  });

  it("first message should print", () => {
    expect(logger.shouldPrintMessage(1, "foo")).toBe(true);
  });

  it("same message within 10 seconds should not print", () => {
    expect(logger.shouldPrintMessage(1, "foo")).toBe(true);
    expect(logger.shouldPrintMessage(5, "foo")).toBe(false);
  });

  it("same message after 10 seconds should print", () => {
    expect(logger.shouldPrintMessage(1, "foo")).toBe(true);
    expect(logger.shouldPrintMessage(11, "foo")).toBe(true);
  });

  it("multi-message scenario", () => {
    expect(logger.shouldPrintMessage(1, "foo")).toBe(true);
    expect(logger.shouldPrintMessage(2, "bar")).toBe(true);
    expect(logger.shouldPrintMessage(3, "foo")).toBe(false);
    expect(logger.shouldPrintMessage(11, "bar")).toBe(false);
    expect(logger.shouldPrintMessage(11, "foo")).toBe(true);
  });
});
