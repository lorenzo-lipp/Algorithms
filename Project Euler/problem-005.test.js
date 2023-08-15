const { smallestMult } = require("./problem-005");

describe("Testing problem 5: smallest multiple", () => {
    it("should return a number", () => {
        expect(typeof smallestMult(5)).toBe("number");
    });

    it("should return 60 when input 5", () => {
        expect(smallestMult(5)).toBe(60);
    });

    it("should return 420 when input 7", () => {
        expect(smallestMult(7)).toBe(420);
    });

    it("should return 2520 when input 10", () => {
        expect(smallestMult(10)).toBe(2520);
    });

    it("should return 360360 when input 13", () => {
        expect(smallestMult(13)).toBe(360360);
    });

    it("should return 232792560 when input 20", () => {
        expect(smallestMult(20)).toBe(232792560);
    });
})