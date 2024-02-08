let { fibonacci } = require("./fibonacci-sequence");

describe("Testing fibonacci", () => {
    it("should be a function", () => {
        expect(typeof fibonacci).toBe("function");
    });

    it("should return a number", () => {
        expect(typeof fibonacci(2)).toBe("number");
    });

    it("should return 2 when input 3", () => {
        expect(fibonacci(3)).toBe(2);
    });

    it("should return 5 when input 5", () => {
        expect(fibonacci(5)).toBe(5);
    });

    it("should return 55 when input 10", () => {
        expect(fibonacci(10)).toBe(55);
    });
});