const { codedTriangleNumbers } = require("./problem-042");

describe("Testing problem 42: coded triangle numbers", () => {
    it("should return a number", () => {
        expect(typeof codedTriangleNumbers(1400)).toBe("number");
    });

    it("should return 129 when input 1400", () => {
        expect(codedTriangleNumbers(1400)).toBe(129);
    });

    it("should return 137 when input 1500", () => {
        expect(codedTriangleNumbers(1500)).toBe(137);
    });

    it("should return 141 when input 1600", () => {
        expect(codedTriangleNumbers(1600)).toBe(141);
    });

    it("should return 162 when input 1786", () => {
        expect(codedTriangleNumbers(1786)).toBe(162);
    });
})