// 2667. Create Hello World Function
export function createHelloWorld() {
    return function(...args: any): string {
        return "Hello World"
    };
};