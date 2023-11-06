const { primePairSets } = require("./problem-060");

describe("Testing problem 60: prime pair sets", () => {
    let result = primePairSets();

    it("should return a number", () => {
        expect(typeof result).toBe("number");
    });

    it("should return 26033", () => {
        expect(result).toBe(26033);
    });
});