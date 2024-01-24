let { entropy } = require("./entropy");

describe("Testing entropy", () => {
    it("should be a function", () => {
        expect(typeof entropy).toBe("function");
    });

    it("should return 0 to the string 0", () => {
        expect(entropy("0")).toBe(0);
    });

    it("should return 1 to the string 01", () => {
        expect(entropy("01")).toBe(1);
    });

    it("should return 2 to the string 0123", () => {
        expect(entropy("0123")).toBe(2);
    });

    it("should return 3 to the string 01234567", () => {
        expect(entropy("01234567")).toBe(3);
    });

    it("should return 4 to the string 0123456789abcdef", () => {
        expect(entropy("0123456789abcdef")).toBe(4);
    });

    it("should return 1.8464393446710154 to the string 1223334444", () => {
        expect(entropy("1223334444")).toBe(1.8464393446710154);
    });
});