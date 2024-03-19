let { convertSeconds } = require("./convert-seconds-to-compound-duration");

describe("Testing convertSeconds", () => {
    it("should be a function", () => {
        expect(typeof convertSeconds).toBe("function")
    });

    it("should return '2 hr, 59 sec' when input 7259", () => {
        expect(convertSeconds(7259)).toBe("2 hr, 59 sec");
    });

    it("should return '1 d' when input 86400", () => {
        expect(convertSeconds(86400)).toBe("1 d");
    });

    it("should return '9 wk, 6 d, 10 hr, 40 min' when input 6000000", () => {
        expect(convertSeconds(6000000)).toBe("9 wk, 6 d, 10 hr, 40 min");
    });
});