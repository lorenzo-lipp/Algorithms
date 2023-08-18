const { nthPrime } = require("./problem-007");

describe("Testing problem 7: nth prime", () => {
    it("should return a number", () => {
        expect(typeof nthPrime(6)).toBe("number");
    });

    it("should return 13 when input 6", () => {
        expect(nthPrime(6)).toBe(13);
    });

    it("should return 29 when input 10", () => {
        expect(nthPrime(10)).toBe(29);
    });

    it("should return 541 when input 100", () => {
        expect(nthPrime(100)).toBe(541);
    });

    it("should return 7919 when input 1000", () => {
        expect(nthPrime(1000)).toBe(7919);
    });

    it("should return 104743 when input 10001", () => {
        expect(nthPrime(10001)).toBe(104743);
    });
})