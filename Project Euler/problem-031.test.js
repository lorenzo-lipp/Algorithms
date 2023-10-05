const { coinSums } = require("./problem-031");

describe("Testing problem 31: coin sums", () => {
    it("should return a number", () => {
        expect(typeof coinSums(50)).toBe("number");
    });

    it("should return 451 when input 50", () => {
        expect(coinSums(50)).toBe(451);
    });

    it("should return 4563 when input 100", () => {
        expect(coinSums(100)).toBe(4563);
    });

    it("should return 21873 when input 150", () => {
        expect(coinSums(150)).toBe(21873);
    });

    it("should return 73682 when input 200", () => {
        expect(coinSums(200)).toBe(73682);
    });
})