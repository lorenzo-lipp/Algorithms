const { darts } = require("./problem-109");
  

describe("Testing problem 109: darts", () => {
    it("should return a number", () => {
        expect(typeof darts(7)).toBe("number");
    });

    it("should return 38182 when input 100", () => {
        expect(darts(100)).toBe(38182);
    });

    it("should return 42336 when input higher than maximum checkout possible", () => {
        expect(darts(171)).toBe(42336);
    });
});