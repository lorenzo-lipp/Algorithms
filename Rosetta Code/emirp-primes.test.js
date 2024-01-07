let { emirps } = require("./emirp-primes");

describe("Testing emirps", () => {
    it("should be a function", () => {
        expect(typeof emirps).toBe("function");
    });

    it("should return [13,17,31,37,71,73,79,97,107,113,149,157,167,179,199,311,337,347,359,389] as the first 20 emirps", () => {
        expect(emirps(20, true)).toStrictEqual([13,17,31,37,71,73,79,97,107,113,149,157,167,179,199,311,337,347,359,389]);
    });

    it("should return 70529 as the 1000th emirp", () => {
        expect(emirps(1000)).toBe(70529);
    });

    it("should return [7717,7757,7817,7841,7867,7879,7901,7927,7949,7951,7963] as the emirps in range [7700, 8000]", () => {
        expect(emirps([7700,8000], true)).toStrictEqual([7717,7757,7817,7841,7867,7879,7901,7927,7949,7951,7963]);
    });

    it("should return 11 as the emirps count in range [7700, 8000]", () => {
        expect(emirps([7700,8000], false)).toBe(11);
    });
});