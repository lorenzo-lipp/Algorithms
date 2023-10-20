const { triPentaHexa } = require("./problem-045");

describe("Testing problem 45: triangular, pentagonal and hexagonal", () => {
    it("should return a number", () => {
        expect(typeof triPentaHexa(1)).toBe("number");
    });

    it("should return 1533776805 when input 40756", () => {
        expect(triPentaHexa(40756)).toBe(1533776805);
    });
})