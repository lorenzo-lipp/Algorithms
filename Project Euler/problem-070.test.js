const { totientPermutation } = require("./problem-070");

describe("Testing problem 70: totient permutation", () => {
    it("should return a number", () => {
        expect(typeof totientPermutation(10000)).toBe("number");
    });

    it("should return 4435 when input 10000", () => {
        expect(totientPermutation(10000)).toBe(4435);
    });

    it("should return 75841 when input 100000", () => {
        expect(totientPermutation(100000)).toBe(75841);
    });

    it("should return 474883 when input 500000", () => {
        expect(totientPermutation(500000)).toBe(474883);
    });

    it("should return 8319823 when input 10000000", () => {
        expect(totientPermutation(10000000)).toBe(8319823);
    });
});