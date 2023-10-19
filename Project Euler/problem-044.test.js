const { pentagonNumbers } = require("./problem-044");

describe("Testing problem 44: pentagon numbers", () => {
    it("should return a number", () => {
        expect(typeof pentagonNumbers()).toBe("number");
    });

    it("should return 5482660 when input 5", () => {
        expect(pentagonNumbers()).toBe(5482660);
    });
})