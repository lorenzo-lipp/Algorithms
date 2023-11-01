const { countLychrelNumbers } = require("./problem-055");

describe("Testing problem 55: count Lychrel numbers", () => {
    it("should return a number", () => {
        expect(typeof countLychrelNumbers(1000)).toBe("number");
    });

    it("should return 13 when input 1000", () => {
        expect(countLychrelNumbers(1000)).toBe(13);
    });

    it("should return 39 when input 3243", () => {
        expect(countLychrelNumbers(3243)).toBe(39);
    });

    it("should return 76 when input 5000", () => {
        expect(countLychrelNumbers(5000)).toBe(76);
    });

    it("should return 140 when input 7654", () => {
        expect(countLychrelNumbers(7654)).toBe(140);
    });

    it("should return 249 when input 10000", () => {
        expect(countLychrelNumbers(10000)).toBe(249);
    });
});