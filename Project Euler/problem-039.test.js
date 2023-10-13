const { intRightTriangles } = require("./problem-039");

describe("Testing problem 39: integer right triangles", () => {
    it("should return a number", () => {
        expect(typeof intRightTriangles(500)).toBe("number");
    });

    it("should return 500 when input 420", () => {
        expect(intRightTriangles(500)).toBe(420);
    });

    it("should return 720 when input 800", () => {
        expect(intRightTriangles(800)).toBe(720);
    });

    it("should return 840 when input 900", () => {
        expect(intRightTriangles(900)).toBe(840);
    });

    it("should return 840 when input 1000", () => {
        expect(intRightTriangles(1000)).toBe(840);
    });
})