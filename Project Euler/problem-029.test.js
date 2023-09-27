const { distinctPowers } = require("./problem-029");

describe("Testing problem 29: distinct powers", () => {
    it("should return a number", () => {
        expect(typeof distinctPowers(5)).toBe("number");
    });

    it("should return 15 when input 5", () => {
        expect(distinctPowers(5)).toBe(15);
    });

    it("should return 177 when input 15", () => {
        expect(distinctPowers(15)).toBe(177);
    });

    it("should return 324 when input 20", () => {
        expect(distinctPowers(20)).toBe(324);
    });

    it("should return 519 when input 25", () => {
        expect(distinctPowers(25)).toBe(519);
    });

    it("should return 755 when input 30", () => {
        expect(distinctPowers(30)).toBe(755);
    });
})