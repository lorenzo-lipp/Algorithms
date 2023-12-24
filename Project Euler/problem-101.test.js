const { optimumPolynomial } = require("./problem-101");

describe("Testing problem 101: optimum polynomial", () => {
    it("should return a number", () => {
        expect(typeof optimumPolynomial()).toBe("number");
    });

    it("should return 37076114526", () => {
        expect(optimumPolynomial()).toBe(37076114526);
    });
});