const { digitCancellingFractions } = require("./problem-033");

describe("Testing problem 33: digit cancelling fractions", () => {
    it("should return a number", () => {
        expect(typeof digitCancellingFractions()).toBe("number");
    });

    it("should return 100", () => {
        expect(digitCancellingFractions()).toBe(100);
    });
})