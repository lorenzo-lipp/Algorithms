let { leftFactorial } = require("./left-factorials");

describe("Testing leftFactorial", () => {
    it("should be a function", () => {
        expect(typeof leftFactorial).toBe("function");
    });

    it("should return a number", () => {
        expect(typeof leftFactorial(0)).toBe("number");
    });

    it("should return 0 when input 0", () => {
        expect(leftFactorial(0)).toBe(0);
    });

    it("should return 1 when input 1", () => {
        expect(leftFactorial(1)).toBe(1);
    });

    it("should return 2 when input 2", () => {
        expect(leftFactorial(2)).toBe(2);
    });

    it("should return 4 when input 3", () => {
        expect(leftFactorial(3)).toBe(4);
    });

    it("should return 409114 when input 10", () => {
        expect(leftFactorial(10)).toBe(409114);
    });

    it("should return 22324392524314 when input 17", () => {
        expect(leftFactorial(17)).toBe(22324392524314);
    });

    it("should return 6780385526348314 when input 19", () => {
        expect(leftFactorial(19)).toBe(6780385526348314);
    });
});