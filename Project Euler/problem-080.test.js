const { sqrtDigitalExpansion } = require("./problem-080");

describe("Testing problem 80: sqrt digital expansion", () => {
    it("should return a number", () => {
        expect(typeof sqrtDigitalExpansion(2)).toBe("number");
    });

    it("should return 475 when input 2", () => {
        expect(sqrtDigitalExpansion(2)).toBe(475);
    });

    it("should return 19543 when input 50", () => {
        expect(sqrtDigitalExpansion(50)).toBe(19543);
    });

    it("should return 40886 when input 100", () => {
        expect(sqrtDigitalExpansion(100)).toBe(40886);
    });
});