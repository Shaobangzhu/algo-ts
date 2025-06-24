import { createHelloWorld } from "../../200-easy/1-create-hello-world-func";

describe("Create Hello World Function", () => {
    it("should return a function that returns 'Hello World'", ()=>{
        const fn = createHelloWorld();
        expect(fn()).toBe("Hello World");
        expect(fn(1,2,3)).toBe("Hello World");
        expect(fn("anything")).toBe("Hello World");
    })
})