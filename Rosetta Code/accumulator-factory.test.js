let { accumulator } = require("./accumulator-factory");

describe("Testing accumulator factory problem", () => {
    it("should be a function", () => {
        expect(typeof accumulator).toBe("function");
    });

    it("should accumulator(0) return a function", () => {
        expect(typeof accumulator(0)).toBe("function");
    });

    it("should accumulator(0)(2) return a function", () => {
        expect(typeof accumulator(0)(2)).toBe("number");
    });

    it("should return 5.5 when inputs are 3, -4, 1.5 and 5", () => {
        let sum = accumulator(3);
        sum(-4);
        sum(1.5);

        expect(sum(5)).toBe(5.5);
    });
});
