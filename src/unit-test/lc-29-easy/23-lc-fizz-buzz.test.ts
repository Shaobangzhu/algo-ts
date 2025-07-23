import { fizzBuzz } from "../../lc-29-easy/23-lc-fizz-buzz";

describe("412. FizzBuzz", ()=>{
    it("n=3", ()=>{
        expect(fizzBuzz(3)).toEqual(["1","2","Fizz"]);
    });
    it("n=5", ()=>{
        expect(fizzBuzz(5)).toEqual(["1", "2", "Fizz", "4", "Buzz"]);
    });
    it("n=15", ()=>{
        expect(fizzBuzz(15)).toEqual(["1", "2", "Fizz", "4", "Buzz","Fizz", "7", "8", "Fizz", "Buzz","11", "Fizz", "13", "14", "FizzBuzz"]);
    });
});