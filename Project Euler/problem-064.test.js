const { oddPeriodSqrts } = require("./problem-064");

describe("Testing problem 64: odd period sqrts", () => {
    it("should return a number", () => {
        expect(typeof oddPeriodSqrts(13)).toBe("number");
    });

    it("should return 83 when input 500", () => {
        expect(oddPeriodSqrts(500)).toBe(83);
    });

    it("should return 152 when input 1000", () => {
        expect(oddPeriodSqrts(1000)).toBe(152);
    });

    it("should return 690 when input 5000", () => {
        expect(oddPeriodSqrts(5000)).toBe(690);
    });

    it("should return 1322 when input 10000", () => {
        expect(oddPeriodSqrts(10000)).toBe(1322);
    });
});
