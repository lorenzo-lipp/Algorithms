const { permutedMultiples } = require("./problem-052");

describe("Testing problem 52: permuted multiples", () => {
    it("should return a number", () => {
        expect(typeof permutedMultiples(2)).toBe("number");
    });

    it("should return 125874 when input 2", () => {
        expect(permutedMultiples(2)).toBe(125874);
    });

    it("should return 142857 when input 3", () => {
        expect(permutedMultiples(3)).toBe(142857);
    });
})