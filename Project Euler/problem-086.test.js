const { cuboidRoute } = require("./problem-086");

describe("Testing problem 86: cuboid route", () => {
    it("should return a number", () => {
        expect(typeof cuboidRoute(2000)).toBe("number");
    });

    it("should return 100 when input 2000", () => {
        expect(cuboidRoute(2000)).toBe(100);
    });

    it("should return 320 when input 25000", () => {
        expect(cuboidRoute(25000)).toBe(320);
    });

    it("should return 1309 when input 500000", () => {
        expect(cuboidRoute(500000)).toBe(1309);
    });

    it("should return 1818 when input 1000000", () => {
        expect(cuboidRoute(1000000)).toBe(1818);
    });
});