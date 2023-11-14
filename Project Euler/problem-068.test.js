const { magic5GonRing } = require("./problem-068");

describe("Testing problem 68: magic 5 gon ring", () => {
    it("should return a number", () => {
        expect(typeof magic5GonRing()).toBe("number");
    });

    it("should return 6531031914842725", () => {
        expect(magic5GonRing()).toBe(6531031914842725);
    });
});