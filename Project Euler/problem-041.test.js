const { pandigitalPrime } = require("./problem-041");

describe("Testing problem 41: pandigital prime", () => {
    it("should return a number", () => {
        expect(typeof pandigitalPrime(4)).toBe("number");
    });

    it("should return 4231 when input 4", () => {
        expect(pandigitalPrime(4)).toBe(4231);
    });

    it("should return 7652413 when input 7", () => {
        expect(pandigitalPrime(7)).toBe(7652413);
    });
})