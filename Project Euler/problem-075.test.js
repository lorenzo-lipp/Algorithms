const { singularIntRightTriangles } = require("./problem-075");

describe("Testing problem 75: singular integer right triangles", () => {
    it("should return a number", () => {
        expect(typeof singularIntRightTriangles(48)).toBe("number");
    });

    it("should return 6 when input 48", () => {
        expect(singularIntRightTriangles(48)).toBe(6);
    });

    it("should return 75783 when input 700000", () => {
        expect(singularIntRightTriangles(700000)).toBe(75783);
    });

    it("should return 107876 when input 1000000", () => {
        expect(singularIntRightTriangles(1000000)).toBe(107876);
    });

    it("should return 161667 when input 1500000", () => {
        expect(singularIntRightTriangles(1500000)).toBe(161667);
    });
});