const { subsetSumsMetaTesting } = require("./problem-106");
  

describe("Testing problem 106: subset sums meta testing", () => {
    it("should return a number", () => {
        expect(typeof subsetSumsMetaTesting(4)).toBe("number");
    });

    it("should return 1 when input 4", () => {
        expect(subsetSumsMetaTesting(4)).toBe(1);
    });

    it("should return 70 when input 7", () => {
        expect(subsetSumsMetaTesting(7)).toBe(70);
    });

    it("should return 21384 when input 12", () => {
        expect(subsetSumsMetaTesting(12)).toBe(21384);
    });
});