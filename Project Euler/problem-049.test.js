const { primePermutations } = require("./problem-049");

describe("Testing problem 49: prime permutations", () => {
    it("should return a number", () => {
        expect(typeof primePermutations()).toBe("number");
    });

    it("should return 296962999629", () => {
        expect(primePermutations()).toBe(296962999629);
    });
})
