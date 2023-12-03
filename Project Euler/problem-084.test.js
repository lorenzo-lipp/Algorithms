const { monopolyOdds } = require("./problem-084");

describe("Testing problem 84: monopoly odds", () => {
    it("should return a string", () => {
        expect(typeof monopolyOdds(8)).toBe("string");
    });

    it("should return \"102400\" when input 8", () => {
        expect(monopolyOdds(8)).toBe("102400");
    });

    it("should return \"100024\" when input 10", () => {
        expect(monopolyOdds(10)).toBe("100024");
    });

    it("should return \"100005\" when input 20", () => {
        expect(monopolyOdds(20)).toBe("100005");
    });

    it("should return \"101524\" when input 4", () => {
        expect(monopolyOdds(4)).toBe("101524");
    });
});