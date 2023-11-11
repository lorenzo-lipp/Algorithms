const { convergentsOfE } = require("./problem-065");

describe("Testing problem 65: convergents of e", () => {
    it("should return a number", () => {
        expect(typeof convergentsOfE(10)).toBe("number");
    });

    it("should return 17 when input 10", () => {
        expect(convergentsOfE(10)).toBe(17);
    });

    it("should return 53 when input 30", () => {
        expect(convergentsOfE(30)).toBe(53);
    });

    it("should return 91 when input 50", () => {
        expect(convergentsOfE(50)).toBe(91);
    });

    it("should return 169 when input 70", () => {
        expect(convergentsOfE(70)).toBe(169);
    });

    it("should return 272 when input 100", () => {
        expect(convergentsOfE(100)).toBe(272);
    });
});
