let { allEqual, azSorted } = require("./compare-a-list-of-strings");

describe("Testing allEqual and azSorted", () => {
    it("should be a function", () => {
        expect(typeof allEqual).toBe("function");
        expect(typeof azSorted).toBe("function");
    });

    it("allEqual should return true when input ['AA', 'AA', 'AA', 'AA']", () => {
        expect(allEqual(["AA", "AA", "AA", "AA"])).toBe(true);
    });

    it("azSorted should return false when input ['AA', 'AA', 'AA', 'AA']", () => {
        expect(azSorted(["AA", "AA", "AA", "AA"])).toBe(false);
    });

    it("allEqual should return false when input ['AA', 'ACB', 'BB', 'CC']", () => {
        expect(allEqual(["AA", "ACB", "BB", "CC"])).toBe(false);
    });

    it("azSorted should return true when input ['AA', 'ACB', 'BB', 'CC']", () => {
        expect(azSorted(["AA", "ACB", "BB", "CC"])).toBe(true);
    });

    it("allEqual should return true when input []", () => {
        expect(allEqual([])).toBe(true);
    });

    it("azSorted should return true when input []", () => {
        expect(azSorted([])).toBe(true);
    });

    it("allEqual should return true when input ['AA']", () => {
        expect(allEqual(["AA"])).toBe(true);
    });

    it("azSorted should return true when input ['AA']", () => {
        expect(azSorted(["AA"])).toBe(true);
    });

    it("allEqual should return false when input ['BB', 'AA']", () => {
        expect(allEqual(["BB", "AA"])).toBe(false);
    });

    it("azSorted should return false when input ['BB', 'AA']", () => {
        expect(azSorted(["BB", "AA"])).toBe(false);
    });
});