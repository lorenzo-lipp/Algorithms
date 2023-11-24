const { coinPartitions } = require("./problem-078");

describe("Testing problem 78: coin partitions", () => {
    it("should return a number", () => {
        expect(typeof coinPartitions(7)).toBe("number");
    });

    it("should return 5 when input 7", () => {
        expect(coinPartitions(7)).toBe(5);
    });

    it("should return 599 when input 10000", () => {
        expect(coinPartitions(10000)).toBe(599);
    });

    it("should return 11224 when input 100000", () => {
        expect(coinPartitions(100000)).toBe(11224);
    });

    it("should return 55374 when input 1000000", () => {
        expect(coinPartitions(1000000)).toBe(55374);
    });
});