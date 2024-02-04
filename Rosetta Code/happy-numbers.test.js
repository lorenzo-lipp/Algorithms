let { happy } = require("./happy-numbers");

describe("Testing happy", () => {
    it("should be a function", () => {
        expect(typeof happy).toBe("function");
    });

    it("should return a boolean", () => {
        expect(typeof happy(1)).toBe("boolean");
    });

    it("should return true when input 1", () => {
        expect(happy(1)).toBe(true);
    });

    it("should return false when input 2", () => {
        expect(happy(2)).toBe(false);
    });

    it("should return true when input 7", () => {
        expect(happy(7)).toBe(true);
    });

    it("should return true when input 10", () => {
        expect(happy(10)).toBe(true);
    });

    it("should return true when input 13", () => {
        expect(happy(13)).toBe(true);
    });
});