const { countingSundays } = require("./problem-019");

describe("Testing problem 19: counting sundays", () => {
    it("should return a number", () => {
        expect(typeof countingSundays(1943, 1946)).toBe("number");
    });

    it("should return 6 when input interval 1943 to 1946", () => {
        expect(countingSundays(1943, 1946)).toBe(6);
    });

    it("should return 10 when input interval 1995 to 2000", () => {
        expect(countingSundays(1995, 2000)).toBe(10);
    });

    it("should return 10 when input interval 1901 to 2000", () => {
        expect(countingSundays(1901, 2000)).toBe(171);
    });
})