const { bouncyNumbers } = require("./problem-112");
  

describe("Testing problem 112: bouncy numbers", () => {
    it("should return a number", () => {
        expect(typeof bouncyNumbers(0.9)).toBe("number");
    });

    it("should return 21780 when input 0.9", () => {
        expect(bouncyNumbers(0.9)).toBe(21780);
    });

    it("should return 1587000 when input 0.99", () => {
        expect(bouncyNumbers(0.99)).toBe(1587000);
    });
});