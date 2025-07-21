import { longestCommonPrefix } from "../../lc-100-easy/4-lc-longest-common-prefix";

describe("Write a function to find the longest common prefix string amongst an array of strings", ()=>{
    it("input string array is flower, flow, flight", ()=>{
        expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
    });
    it("input string array is dog, racecar, car", ()=>{
        expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
    });
})