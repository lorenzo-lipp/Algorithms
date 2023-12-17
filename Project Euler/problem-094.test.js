const { almostEquilateralTriangles } = require("./problem-094");

describe("Testing problem 94: almost equilateral triangles", () => {
    it("should return a number", () => {
        expect(typeof almostEquilateralTriangles(50)).toBe("number");
    });

    it("should return 66 when input 50", () => {
        expect(almostEquilateralTriangles(50)).toBe(66);
    });

    it("should return 3688 when input 10000", () => {
        expect(almostEquilateralTriangles(10000)).toBe(3688);
    });

    it("should return 9973078 when input 10000000", () => {
        expect(almostEquilateralTriangles(10000000)).toBe(9973078);
    });

    it("should return 518408346 when input 1000000000", () => {
        expect(almostEquilateralTriangles(1000000000)).toBe(518408346);
    });
});