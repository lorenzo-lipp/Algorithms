const { specialPythagoreanTriplet } = require("./problem-009");

describe("Testing problem 9: special pythagorean triplet", () => {
    it("should return a number", () => {
        expect(typeof specialPythagoreanTriplet(24)).toBe("number");
    });

    it("should return 480 when input 24", () => {
        expect(specialPythagoreanTriplet(24)).toBe(480);
    });

    it("should return 49920, 55080 or 60000 when input 120", () => {
        expect([49920, 55080, 60000]).toContain(specialPythagoreanTriplet(120));
    });

    it("should return 31875000 when input 1000", () => {
        expect(specialPythagoreanTriplet(1000)).toBe(31875000);
    });
})