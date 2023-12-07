const { primePowerTriples } = require("./problem-087");

describe("Testing problem 87: prime power triples", () => {
    it("should return a number", () => {
        expect(typeof primePowerTriples(50)).toBe("number");
    });

    it("should return 4 when input 50", () => {
        expect(primePowerTriples(50)).toBe(4);
    });

    it("should return 684 when input 10035", () => {
        expect(primePowerTriples(10035)).toBe(684);
    });

    it("should return 18899 when input 500000", () => {
        expect(primePowerTriples(500000)).toBe(18899);
    });

    it("should return 138932 when input 5000000", () => {
        expect(primePowerTriples(5000000)).toBe(138932);
    });

    it("should return 1097343 when input 50000000", () => {
        expect(primePowerTriples(50000000)).toBe(1097343);
    });
});