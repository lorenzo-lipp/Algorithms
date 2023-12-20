const { largeNonMersennePrime } = require("./problem-097");

describe("Testing problem 97: large non Mersenne prime", () => {
    it("should return a string", () => {
        expect(typeof largeNonMersennePrime(19, 6833086)).toBe("string");
    });

    it("should return 3637590017 when inputs 19 and 6833086", () => {
        expect(largeNonMersennePrime(19, 6833086)).toBe("3637590017");
    });

    it("should return 0130771969 when inputs 27 and 7046834", () => {
        expect(largeNonMersennePrime(27, 7046834)).toBe("0130771969");
    });

    it("should return 4455386113 when inputs 6679881 and 6679881", () => {
        expect(largeNonMersennePrime(6679881, 6679881)).toBe("4455386113");
    });

    it("should return 8739992577 when inputs 28433 and 7830457", () => {
        expect(largeNonMersennePrime(28433, 7830457)).toBe("8739992577");
    });
});