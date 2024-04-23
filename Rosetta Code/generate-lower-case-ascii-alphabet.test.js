let { lascii } = require("./generate-lower-case-ascii-alphabet");

describe("Testing lascii", () => {
    it("should be a function", () => {
        expect(typeof lascii).toBe("function");
    });

    it("should return an array", () => {
        expect(Array.isArray(lascii("a", "d"))).toBe(true);
    });

    it("should return ['a', 'b', 'c', 'd'] when from='a' and to='d'", () => {
        expect(lascii("a", "d")).toStrictEqual(['a', 'b', 'c', 'd']);
    });

    it("should return ['c', 'd', 'e', 'f', 'g', 'h', 'i'] when from='c' and to='i'", () => {
        expect(lascii("c", "i")).toStrictEqual(['c', 'd', 'e', 'f', 'g', 'h', 'i']);
    });

    it("should return ['m', 'n', 'o', 'p', 'q'] when from='m' and to='q'", () => {
        expect(lascii("m", "q")).toStrictEqual(['m', 'n', 'o', 'p', 'q']);
    });

    it("should return ['k', 'l', 'm', 'n'] when from='k' and to='n'", () => {
        expect(lascii("k", "n")).toStrictEqual(['k', 'l', 'm', 'n']);
    });

    it("should return ['t', 'u', 'v', 'w', 'x', 'y', 'z'] when from='t' and to='z'", () => {
        expect(lascii("t", "z")).toStrictEqual(['t', 'u', 'v', 'w', 'x', 'y', 'z']);
    });
});