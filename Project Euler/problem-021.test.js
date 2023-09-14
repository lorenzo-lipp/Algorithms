const { sumAmicableNum } = require("./problem-021");

describe("Testing problem 21: amicable numbers", () => {
    it("should return a number", () => {
        expect(typeof sumAmicableNum(1000)).toBe("number");
    });

    it("should return 504 when input 1000", () => {
        expect(sumAmicableNum(1000)).toBe(504);
    });

    it("should return 2898 when input 2000", () => {
        expect(sumAmicableNum(2000)).toBe(2898);
    });

    it("should return 8442 when input 5000", () => {
        expect(sumAmicableNum(5000)).toBe(8442);
    });

    it("should return 31626 when input 10000", () => {
        expect(sumAmicableNum(10000)).toBe(31626);
    });
})