const { primeSummations } = require("./problem-077");

describe("Testing problem 77: prime summations", () => {
    it("should return a number", () => {
        expect(typeof primeSummations(5)).toBe("number");
    });

    it("should return 11 when input 5", () => {
        expect(primeSummations(5)).toBe(11);
    });

    it("should return 31 when input 100", () => {
        expect(primeSummations(100)).toBe(31);
    });

    it("should return 53 when input 1000", () => {
        expect(primeSummations(1000)).toBe(53);
    });

    it("should return 71 when input 5000", () => {
        expect(primeSummations(5000)).toBe(71);
    });
});