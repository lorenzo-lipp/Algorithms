let { gcd } = require("./greatest-common-divisor");

describe("Testing gcd", () => {
    it("should be a function", () => {
        expect(typeof gcd).toBe("function");
    });

    it("should return a number", () => {
        expect(typeof gcd(24, 36)).toBe("number");
    });

    it("should return 12 as the gcd of 24 and 36", () => {
        expect(gcd(24, 36)).toBe(12);
    });

    it("should return 12 as the gcd of 36 and 24", () => {
        expect(gcd(36, 24)).toBe(12);
    });

    it("should return 6 as the gcd of 30 and 48", () => {
        expect(gcd(30, 48)).toBe(6);
    });

    it("should return 5 as the gcd of 10 and 15", () => {
        expect(gcd(10, 15)).toBe(5);
    });

    it("should return 25 as the gcd of 100 and 25", () => {
        expect(gcd(100, 25)).toBe(25);
    });

    it("should return 1 as the gcd of 13 and 250", () => {
        expect(gcd(13, 250)).toBe(1);
    });

    it("should return 50 as the gcd of 1300 and 250", () => {
        expect(gcd(1300, 250)).toBe(50);
    });
});