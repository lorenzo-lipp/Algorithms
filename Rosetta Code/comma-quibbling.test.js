let { quibble } = require("./comma-quibbling");

describe("Testing quibble", () => {
    it("should be a function", () => {
        expect(typeof quibble).toBe("function");
    });

    it("should return a string", () => {
        expect(typeof quibble(["ABC"])).toBe("string");
    });

    it("should return '{}' when input []", () => {
        expect(quibble([])).toBe("{}");
    });

    it("should return '{ABC}' when input ['ABC']", () => {
        expect(quibble(["ABC"])).toBe("{ABC}");
    });

    it("should return '{ABC and DEF}' when input ['ABC', 'DEF']", () => {
        expect(quibble(["ABC", "DEF"])).toBe("{ABC and DEF}");
    });

    it("should return '{ABC, DEF, G and H}' when input ['ABC', 'DEF', 'G', 'H']", () => {
        expect(quibble(["ABC", "DEF", "G", "H"])).toBe("{ABC, DEF, G and H}");
    });
});