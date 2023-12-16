const { arithmeticExpressions } = require("./problem-093");

describe("Testing problem 93: arithmetic expressions", () => {
    it("should return a number", () => {
        expect(typeof arithmeticExpressions()).toBe("number");
    });

    it("should return 1258", () => {
        expect(arithmeticExpressions()).toBe(1258);
    });

});