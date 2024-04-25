let { sumSeries } = require("./sum-of-a-series");

describe("Testing sumSeries", () => {
    it("should be a function", () => {
        expect(typeof sumSeries).toBe("function");
    });

    it("should return a number", () => {
        expect(typeof sumSeries(1, 100)).toBe("number");
    });

    it("should return 1.6349839001848923 when a=1, b=100", () => {
        expect(sumSeries(1, 100)).toBe(1.6349839001848923);
    });

    it("should return 0.009262256361481223 when a=33, b=46", () => {
        expect(sumSeries(33, 46)).toBe(0.009262256361481223);
    });

    it("should return 0.044086990748706555 when a=21, b=213", () => {
        expect(sumSeries(21, 213)).toBe(0.044086990748706555);
    });

    it("should return 0.08619778593108679 when a=11, b=111", () => {
        expect(sumSeries(11, 111)).toBe(0.08619778593108679);
    });

    it("should return 1.5497677311665408 when a=1, b=10", () => {
        expect(sumSeries(1, 10)).toBe(1.5497677311665408);
    });
});