import { validWordAbbreviation } from "../../lc-200-easy/7-lc-valid-word-abbreviation";

describe("408. Valid Word Abbreviation", ()=>{
    it("word: internationalization, abbr: i12iz4n", ()=>{
        expect(validWordAbbreviation("internationalization", "i12iz4n")).toBeTruthy();
    });
    it("word: apple, abbr: a2e", ()=>{
        expect(validWordAbbreviation("apple", "a2e")).toBeFalsy();
    });
});