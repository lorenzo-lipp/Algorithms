const { diophantineEquation } = require("./problem-066");

describe("Testing problem 66: diophantine equation", () => {
    it("should return a number", () => {
        expect(typeof diophantineEquation(7)).toBe("number");
    });

    it("should return 5 when input 7", () => {
        expect(diophantineEquation(7)).toBe(5);
    });

    it("should return 61 when input 100", () => {
        expect(diophantineEquation(100)).toBe(61);
    });

    it("should return 409 when input 409", () => {
        expect(diophantineEquation(409)).toBe(409);
    });

    it("should return 421 when input 500", () => {
        expect(diophantineEquation(500)).toBe(421);
    });

    it("should return 661 when input 1000", () => {
        expect(diophantineEquation(1000)).toBe(661);
    });
});
