let { countSubstring } = require("./count-occurrences-of-a-substring");

describe("Testing countSubstring", () => {
    it("should be a function", () => {
        expect(typeof countSubstring).toBe("function")
    });

    it("should return 3 when inputs 'the three truths' and 'th'", () => {
        expect(countSubstring("the three truths", "th")).toBe(3);
    });

    it("should return 2 when inputs 'ababababab' and 'abab'", () => {
        expect(countSubstring("ababababab", "abab")).toBe(2);
    });

    it("should return 2 when inputs 'abaabba*bbaba*bbab' and 'a*b'", () => {
        expect(countSubstring("abaabba*bbaba*bbab", "a*b")).toBe(2);
    });
});