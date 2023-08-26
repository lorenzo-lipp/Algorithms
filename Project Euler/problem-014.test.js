const { longestCollatzSequence } = require("./problem-014");

describe("Testing problem 14: longest collatz sequence", () => {
    it("should return a number", () => {
        expect(typeof longestCollatzSequence(14)).toBe("number");
    });

    it("should return 9 when input 14", () => {
        expect(longestCollatzSequence(14)).toBe(9);
    });

    it("should return 3711 when input 5847", () => {
        expect(longestCollatzSequence(5847)).toBe(3711);
    });

    it("should return 35655 when input 46500", () => {
        expect(longestCollatzSequence(46500)).toBe(35655);
    });

    it("should return 52527 when input 54512", () => {
        expect(longestCollatzSequence(54512)).toBe(52527);
    });

    it("should return 77031 when input 100000", () => {
        expect(longestCollatzSequence(100000)).toBe(77031);
    });

    it("should return 837799 when input 1000000", () => {
        expect(longestCollatzSequence(1000000)).toBe(837799);
    });
})