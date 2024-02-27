const { pandigitalFibonacciEnds } = require("./problem-104");

describe("Testing problem 104: pandigital fibonacci ends", () => {
    let result = pandigitalFibonacciEnds();

    it("should return a number", () => {
        expect(typeof result).toBe("number");
    });

    it("should return 329468", () => {
        expect(result).toBe(329468);
    });
});