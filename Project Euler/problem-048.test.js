const { selfPowers } = require("./problem-048");

describe("Testing problem 48: self powers", () => {
    it("should return a number", () => {
        expect(typeof selfPowers(10, 3)).toBe("number");
    });

    it("should return 317 when power is 10 and lastDigits is 3", () => {
        expect(selfPowers(10, 3)).toBe(317);
    });

    it("should return 29045 when power is 150 and lastDigits is 6", () => {
        expect(selfPowers(150, 6)).toBe(29045);
    });

    it("should return 2473989 when power is 673 and lastDigits is 7", () => {
        expect(selfPowers(673, 7)).toBe(2473989);
    });

    it("should return 9110846700 when power is 1000 and lastDigits is 10", () => {
        expect(selfPowers(1000, 10)).toBe(9110846700);
    });
})
