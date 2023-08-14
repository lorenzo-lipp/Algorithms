const { largestPalindromeProduct } = require("./problem-004");

describe("Testing problem 4: largest palindrome product", () => {
    it("should return a number", () => {
        expect(typeof largestPalindromeProduct(2)).toBe("number");
    });

    it("should return 9009 when input 2", () => {
        expect(largestPalindromeProduct(2)).toBe(9009);
    });

    it("should return 906609 when input 3", () => {
        expect(largestPalindromeProduct(3)).toBe(906609);
    });
})