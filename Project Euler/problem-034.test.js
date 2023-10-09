const { digitFactorial } = require("./problem-034");

describe("Testing problem 34: digit factorials", () => {
    it("should return an object", () => {
        expect(typeof digitFactorial()).toBe("object");
    });

    it("should return { sum: 40730, numbers: [145, 40585] }", () => {
        expect(digitFactorial()).toStrictEqual({ sum: 40730, numbers: [145, 40585] });
    });
})