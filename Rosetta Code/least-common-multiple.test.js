let { lcm } = require("./least-common-multiple");

describe("Testing lcm", () => {
    it("should be a function", () => {
        expect(typeof lcm).toBe("function");
    });

    it("should return a number", () => {
        expect(typeof lcm([2, 4, 8])).toBe("number");
    });

    it("should return 8 when input [2, 4, 8]", () => {
        expect(lcm([2, 4, 8])).toBe(8);
    });

    it("should return 24 when input [4, 8, 12]", () => {
        expect(lcm([4, 8, 12])).toBe(24);
    });

    it("should return 120 when input [3, 4, 5, 12, 40]", () => {
        expect(lcm([3, 4, 5, 12, 40])).toBe(120);
    });

    it("should return 990 when input [11, 33, 90]", () => {
        expect(lcm([11, 33, 90])).toBe(990);
    });

    it("should return 67050 when input [-50, 25, -45, -18, 90, 447]", () => {
        expect(lcm([-50, 25, -45, -18, 90, 447])).toBe(67050);
    });
});