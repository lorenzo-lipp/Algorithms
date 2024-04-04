let { factors } = require("./factors-of-an-integer");

describe("Testing factors", () => {
    it("should be a function", () => {
        expect(typeof factors).toBe("function");
    });

    it("should return [1,3,5,9,15,45] as the factors of 45", () => {
        expect(factors(45)).toStrictEqual([1,3,5,9,15,45]);
    });

    it("should return [1,53] as the factors of 53", () => {
        expect(factors(53)).toStrictEqual([1,53]);
    });

    it("should return [1,2,4,8,16,32,64] as the factors of 64", () => {
        expect(factors(64)).toStrictEqual([1,2,4,8,16,32,64]);
    });
});