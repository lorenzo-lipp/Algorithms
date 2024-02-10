let { isLeapYear } = require("./leap-year");

describe("Testing isLeapYear", () => {
    it("should be a function", () => {
        expect(typeof isLeapYear).toBe("function");
    });

    it("should return a boolean", () => {
        expect(typeof isLeapYear(1500)).toBe("boolean");
    });

    it("should return false when year is 2018", () => {
        expect(isLeapYear(2018)).toBe(false);
    });

    it("should return true when year is 2016", () => {
        expect(isLeapYear(2016)).toBe(true);
    });

    it("should return true when year is 2000", () => {
        expect(isLeapYear(2000)).toBe(true);
    });

    it("should return false when year is 1900", () => {
        expect(isLeapYear(1900)).toBe(false);
    });

    it("should return true when year is 1996", () => {
        expect(isLeapYear(1996)).toBe(true);
    });

    it("should return false when year is 1800", () => {
        expect(isLeapYear(1800)).toBe(false);
    });
});