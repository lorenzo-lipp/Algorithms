let { linearCongGenerator } = require("./linear-congruential-generator");

describe("Testing linearCongGenerator", () => {
    it("should be a function", () => {
        expect(typeof linearCongGenerator).toBe("function");
    });

    it("should return a number", () => {
        expect(typeof linearCongGenerator(324, 1145, 177, 2148, 3)).toBe("number");
    });

    it("should return 855 when r0=324, a=1145, c=177, m=2148, n=3", () => {
        expect(linearCongGenerator(324, 1145, 177, 2148, 3)).toBe(855);
    });

    it("should return 1110 when r0=234, a=11245, c=145, m=83648, n=4", () => {
        expect(linearCongGenerator(234, 11245, 145, 83648, 4)).toBe(1110);
    });

    it("should return 62217 when r0=85, a=11, c=1234, m=214748, n=5", () => {
        expect(linearCongGenerator(85, 11, 1234, 214748, 5)).toBe(62217);
    });

    it("should return 12345 when r0=0, a=1103515245, c=12345, m=2147483648, n=1", () => {
        expect(linearCongGenerator(0, 1103515245, 12345, 2147483648, 1)).toBe(12345);
    });

    it("should return 1406932606 when r0=0, a=1103515245, c=12345, m=2147483648, n=2", () => {
        expect(linearCongGenerator(0, 1103515245, 12345, 2147483648, 2)).toBe(1406932606);
    });
});
