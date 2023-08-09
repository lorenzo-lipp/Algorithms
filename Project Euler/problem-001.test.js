const { multiplesOf3and5 } = require("./problem-001");

describe("Testing problem 1: multiples of 3 and 5", () => {
    it("should return a number", () => {
        expect(typeof multiplesOf3and5(10)).toBe("number");
    });

    it("should return 543 when input 49", () => {
        expect(multiplesOf3and5(49)).toBe(543);
    })

    it("should return 233168 when input 1000", () => {
        expect(multiplesOf3and5(1000)).toBe(233168);
    })

    it("should return 16687353 when input 8456", () => {
        expect(multiplesOf3and5(8456)).toBe(16687353);
    })

    it("should return 89301183 when input 19564", () => {
        expect(multiplesOf3and5(19564)).toBe(89301183);
    })
})