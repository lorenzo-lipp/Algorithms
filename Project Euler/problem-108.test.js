const { diophantine } = require("./problem-108");
  

describe("Testing problem 108: diophantine reciprocals i", () => {
    it("should return a number", () => {
        expect(typeof diophantine(2)).toBe("number");
    });

    it("should return 4 when input 2", () => {
        expect(diophantine(2)).toBe(4);
    });

    it("should return 180180 when input 1000", () => {
        expect(diophantine(1000)).toBe(180180);
    });
});