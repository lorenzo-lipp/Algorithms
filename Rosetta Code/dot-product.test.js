let { dotProduct } = require("./dot-product");

describe("Testing dotProduct", () => {
    it("should be a function", () => {
        expect(typeof dotProduct).toBe("function");
    });

    it("should return a number", () => {
        expect(typeof dotProduct([1, 3, -5], [4, -2, -1])).toBe("number");
    });

    it("should return 3 when input [1, 3, -5], [4, -2, -1]", () => {
        expect(dotProduct([1, 3, -5], [4, -2, -1])).toBe(3);
    });

    it("should return 130 when input [1, 2, 3, 4, 5], [6, 7, 8, 9, 10]", () => {
        expect(dotProduct([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])).toBe(130);
    });

    it("should return 106 when input [5, 4, 3, 2], [7, 8, 9, 6]", () => {
        expect(dotProduct([5, 4, 3, 2], [7, 8, 9, 6])).toBe(106);
    });

    it("should return -36 when input [-5, 4, -3, 2], [-7, -8, 9, -6]", () => {
        expect(dotProduct([-5, 4, -3, 2], [-7, -8, 9, -6])).toBe(-36);
    });

    it("should return 10392 when input [17, 27, 34, 43, 15], [62, 73, 48, 95, 110]", () => {
        expect(dotProduct([17, 27, 34, 43, 15], [62, 73, 48, 95, 110])).toBe(10392);
    });
});