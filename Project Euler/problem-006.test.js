const { sumSquareDifference } = require("./problem-006");

describe("Testing problem 6: sum square difference", () => {
    it("should return a number", () => {
        expect(typeof sumSquareDifference(10)).toBe("number");
    });

    it("should return 2640 when input 10", () => {
        expect(sumSquareDifference(10)).toBe(2640);
    });

    it("should return 41230 when input 20", () => {
        expect(sumSquareDifference(20)).toBe(41230);
    });

    it("should return 25164150 when input 100", () => {
        expect(sumSquareDifference(100)).toBe(25164150);
    });
})