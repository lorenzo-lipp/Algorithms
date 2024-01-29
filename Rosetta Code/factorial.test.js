let { factorial } = require("./factorial");

describe("Testing factorial", () => {
    it("should be a function", () => {
        expect(typeof factorial).toBe("function");
    });

    it("should return a number", () => {
        expect(typeof factorial(2)).toBe("number");
    });

    it("should return 6 when input 3", () => {
        expect(factorial(3)).toBe(6);
    });

    it("should return 120 when input 5", () => {
        expect(factorial(5)).toBe(120);
    });

    it("should return 3628800 when input 10", () => {
        expect(factorial(10)).toBe(3628800);
    });
});