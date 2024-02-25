const { optimumSpecialSumSet } = require("./problem-103");

describe("Testing problem 103: optimum special sum set", () => {
    it("should return a string", () => {
        expect(typeof optimumSpecialSumSet(7)).toBe("string");
    });

    it("should return 1 when input 1", () => {
        expect(optimumSpecialSumSet(1)).toBe("1");
    });

    it("should return 12 when input 2", () => {
        expect(optimumSpecialSumSet(2)).toBe("12");
    });

    it("should return 234 when input 3", () => {
        expect(optimumSpecialSumSet(3)).toBe("234");
    });

    it("should return 3567 when input 4", () => {
        expect(optimumSpecialSumSet(4)).toBe("3567");
    });

    it("should return 69111213 when input 5", () => {
        expect(optimumSpecialSumSet(5)).toBe("69111213");
    });

    it("should return 111819202225 when input 6", () => {
        expect(optimumSpecialSumSet(6)).toBe("111819202225");
    });

    it("should return 20313839404245 when input 7", () => {
        expect(optimumSpecialSumSet(7)).toBe("20313839404245");
    });
});