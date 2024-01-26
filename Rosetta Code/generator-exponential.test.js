let { exponentialGenerator } = require("./generator-exponential");

describe("Testing exponentialGenerator", () => {
    it("should be a function", () => {
        expect(typeof exponentialGenerator).toBe("function");
    });

    it("should return a number", () => {
        expect(typeof exponentialGenerator(1)).toBe("number");
    });

    it("should return 144 when input 10", () => {
        expect(exponentialGenerator(10)).toBe(144);
    });

    it("should return 196 when input 12", () => {
        expect(exponentialGenerator(12)).toBe(196);
    });

    it("should return 256 when input 14", () => {
        expect(exponentialGenerator(14)).toBe(256);
    });

    it("should return 484 when input 20", () => {
        expect(exponentialGenerator(20)).toBe(484);
    });

    it("should return 784 when input 25", () => {
        expect(exponentialGenerator(25)).toBe(784);
    });
});