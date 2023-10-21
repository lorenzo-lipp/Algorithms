const { goldbachsOtherConjecture } = require("./problem-046");

describe("Testing problem 46: Goldbach's other conjecture", () => {
    it("should return a number", () => {
        expect(typeof goldbachsOtherConjecture()).toBe("number");
    });

    it("should return 5777", () => {
        expect(goldbachsOtherConjecture()).toBe(5777);
    });
})