const { countingFractions } = require("./problem-072");

describe("Testing problem 72: counting fractions", () => {
    it("should return a number", () => {
        expect(typeof countingFractions(8)).toBe("number");
    });

    it("should return 21 when input 8", () => {
        expect(countingFractions(8)).toBe(21);
    });

    it("should return 121590395 when input 20000", () => {
        expect(countingFractions(20000)).toBe(121590395);
    });

    it("should return 75991039675 when input 500000", () => {
        expect(countingFractions(500000)).toBe(75991039675);
    });

    it("should return 303963552391 when input 1000000", () => {
        expect(countingFractions(1000000)).toBe(303963552391);
    });
});