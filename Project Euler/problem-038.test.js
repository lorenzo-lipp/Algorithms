const { pandigitalMultiples } = require("./problem-038");

describe("Testing problem 38: pandigital multiples", () => {
    it("should return a number", () => {
        expect(typeof pandigitalMultiples(8)).toBe("number");
    });

    it("should return 78156234 when input 8", () => {
        expect(pandigitalMultiples(8)).toBe(78156234);
    });

    it("should return 932718654 when input 9", () => {
        expect(pandigitalMultiples(9)).toBe(932718654);
    });
})