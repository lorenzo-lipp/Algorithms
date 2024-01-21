let { standardDeviation } = require("./cumulative-standart-deviation");

describe("Testing standardDeviation", () => {
    it("should be a function", () => {
        expect(typeof standardDeviation).toBe("function");
    });

    it("should return a number", () => {
        expect(typeof standardDeviation([2, 4, 4, 4, 5, 5, 7, 9])).toBe("number");
    });

    it("should return 2 when input [2, 4, 4, 4, 5, 5, 7, 9]", () => {
        expect(standardDeviation([2, 4, 4, 4, 5, 5, 7, 9])).toBe(2);
    });

    it("should return 147.323 when input [600, 470, 170, 430, 300]", () => {
        expect(standardDeviation([600, 470, 170, 430, 300])).toBe(147.323);
    });

    it("should return 18.239 when input [75, 83, 96, 100, 121, 125]", () => {
        expect(standardDeviation([75, 83, 96, 100, 121, 125])).toBe(18.239);
    });

    it("should return 16.87 when input [23, 37, 45, 49, 56, 63, 63, 70, 72, 82]", () => {
        expect(standardDeviation([23, 37, 45, 49, 56, 63, 63, 70, 72, 82])).toBe(16.87);
    });

    it("should return 22.631 when input [271, 354, 296, 301, 333, 326, 285, 298, 327, 316, 287, 314]", () => {
        expect(standardDeviation([271, 354, 296, 301, 333, 326, 285, 298, 327, 316, 287, 314])).toBe(22.631);
    });
});