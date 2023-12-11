const { rightTrianglesIntCoords } = require("./problem-091");

describe("Testing problem 91: right triangles with integer coords", () => {
    it("should return a number", () => {
        expect(typeof rightTrianglesIntCoords(2)).toBe("number");
    });

    it("should return 14 when input 2", () => {
        expect(rightTrianglesIntCoords(2)).toBe(14);
    });

    it("should return 448 when input 10", () => {
        expect(rightTrianglesIntCoords(10)).toBe(448);
    });

    it("should return 3207 when input 25", () => {
        expect(rightTrianglesIntCoords(25)).toBe(3207);
    });

    it("should return 14234 when input 50", () => {
        expect(rightTrianglesIntCoords(50)).toBe(14234);
    });
});