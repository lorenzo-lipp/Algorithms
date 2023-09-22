const { digitFibonacci } = require("./problem-025");

describe("Testing problem 25: 1000-digit Fibonacci number", () => {
    it("should return a number", () => {
        expect(typeof digitFibonacci(5)).toBe("number");
    });

    it("should return 21 when input 5", () => {
        expect(digitFibonacci(5)).toBe(21);
    });

    it("should return 45 when input 10", () => {
        expect(digitFibonacci(10)).toBe(45);
    });

    it("should return 69 when input 15", () => {
        expect(digitFibonacci(15)).toBe(69);
    });

    it("should return 93 when input 20", () => {
        expect(digitFibonacci(20)).toBe(93);
    });
})