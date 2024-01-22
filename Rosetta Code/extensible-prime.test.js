let { primeGenerator } = require("./extensible-prime");

describe("Testing primeGenerator", () => {
    it("should be a function", () => {
        expect(typeof primeGenerator).toBe("function");
    });

    it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71] as the first 20 primes", () => {
        expect(primeGenerator(20, true)).toStrictEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71]);
    });

    it("should return [101, 103, 107, 109, 113, 127, 131, 137, 139, 149] as the primes between 100 and 150", () => {
        expect(primeGenerator([100, 150], true)).toStrictEqual([101, 103, 107, 109, 113, 127, 131, 137, 139, 149]);
    });

    it("should return 30 as the primes count between 7700 and 8000", () => {
        expect(primeGenerator([7700, 8000], false)).toBe(30);
    });

    it("should return 104729 as the 10000th prime", () => {
        expect(primeGenerator(10000, false)).toBe(104729);
    });
});