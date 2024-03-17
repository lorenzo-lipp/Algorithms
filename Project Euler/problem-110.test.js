const { diophantine } = require("./problem-110");
  

describe("Testing problem 110: diophantine reciprocals ii", () => {
    it("should return a number", () => {
        expect(typeof diophantine(2)).toBe("number");
    });

    it("should return 4 when input 2", () => {
        expect(diophantine(2)).toBe(4);
    });

    it("should return 180180 when input 1000", () => {
        expect(diophantine(1000)).toBe(180180);
    });

    it("should return 9350130049860600 when input 4000000", () => {
        expect(diophantine(4000000)).toBe(9350130049860600);
    });
});